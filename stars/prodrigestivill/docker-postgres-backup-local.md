---
project: docker-postgres-backup-local
stars: 855
description: Backup PostgresSQL to local filesystem with periodic backups and rotate backups.
url: https://github.com/prodrigestivill/docker-postgres-backup-local
---

postgres-backup-local
=====================

Backup PostgresSQL to the local filesystem with periodic rotating backups, based on schickling/postgres-backup-s3. Backup multiple databases from the same host by setting the database names in `POSTGRES_DB` separated by commas or spaces.

Supports the following Docker architectures: `linux/amd64`, `linux/arm64`, `linux/arm/v7`, `linux/s390x`, `linux/ppc64le`.

Please consider reading detailed the How the backups folder works?.

This application requires the docker volume `/backups` to be a POSIX-compliant filesystem to store the backups (mainly with support for hardlinks and softlinks). So filesystems like VFAT, EXFAT, SMB/CIFS, ... can't be used with this docker image.

Usage
-----

Docker:

docker run -u postgres:postgres -e POSTGRES\_HOST=postgres -e POSTGRES\_DB=dbname -e POSTGRES\_USER=user -e POSTGRES\_PASSWORD=password  prodrigestivill/postgres-backup-local

Docker Compose:

version: '2'
services:
    postgres:
        image: postgres
        restart: always
        environment:
            - POSTGRES\_DB=database
            - POSTGRES\_USER=username
            - POSTGRES\_PASSWORD=password
         #  - POSTGRES\_PASSWORD\_FILE=/run/secrets/db\_password <-- alternative for POSTGRES\_PASSWORD (to use with docker secrets)
    pgbackups:
        image: prodrigestivill/postgres-backup-local
        restart: always
        user: postgres:postgres # Optional: see below
        volumes:
            - /var/opt/pgbackups:/backups
        links:
            - postgres
        depends\_on:
            - postgres
        environment:
            - POSTGRES\_HOST=postgres
            - POSTGRES\_DB=database
            - POSTGRES\_USER=username
            - POSTGRES\_PASSWORD=password
         #  - POSTGRES\_PASSWORD\_FILE=/run/secrets/db\_password <-- alternative for POSTGRES\_PASSWORD (to use with docker secrets)
            - POSTGRES\_EXTRA\_OPTS=-Z1 --schema=public --blobs
            - SCHEDULE=@daily
            - BACKUP\_ON\_START=TRUE
            - BACKUP\_KEEP\_DAYS=7
            - BACKUP\_KEEP\_WEEKS=4
            - BACKUP\_KEEP\_MONTHS=6
            - HEALTHCHECK\_PORT=8080

For security reasons it is recommended to run it as user `postgres:postgres`.

In case of running as `postgres` user, the system administrator must initialize the permission of the destination folder as follows:

# for default images (debian)
mkdir -p /var/opt/pgbackups && chown -R 999:999 /var/opt/pgbackups
# for alpine images
mkdir -p /var/opt/pgbackups && chown -R 70:70 /var/opt/pgbackups

### Environment Variables

Most variables are the same as in the official postgres image.

env variable

description

BACKUP\_DIR

Directory to save the backup at. Defaults to `/backups`.

BACKUP\_SUFFIX

Filename suffix to save the backup. Defaults to `.sql.gz`.

BACKUP\_ON\_START

If set to `TRUE` performs an backup on each container start or restart. Defaults to `FALSE`.

BACKUP\_KEEP\_DAYS

Number of daily backups to keep before removal. Defaults to `7`.

BACKUP\_KEEP\_WEEKS

Number of weekly backups to keep before removal. Defaults to `4`.

BACKUP\_KEEP\_MONTHS

Number of monthly backups to keep before removal. Defaults to `6`.

BACKUP\_KEEP\_MINS

Number of minutes for `last` folder backups to keep before removal. Defaults to `1440`.

BACKUP\_LATEST\_TYPE

Type of `latest` pointer (`symlink`,`hardlink`,`none`). Defaults to `symlink`.

VALIDATE\_ON\_START

If set to `FALSE` does not validate the configuration on start. Disabling this is not recommended. Defaults to `TRUE`.

HEALTHCHECK\_PORT

Port listening for cron-schedule health check. Defaults to `8080`.

POSTGRES\_DB

Comma or space separated list of postgres databases to backup. If POSTGRES\_CLUSTER is set this refers to the database to connect to for dumping global objects and discovering what other databases should be dumped (typically is either `postgres` or `template1`). Required.

POSTGRES\_DB\_FILE

Alternative to POSTGRES\_DB, but with one database per line, for usage with docker secrets.

POSTGRES\_EXTRA\_OPTS

Additional options for `pg_dump` (or `pg_dumpall` options if POSTGRES\_CLUSTER is set). Defaults to `-Z1`.

POSTGRES\_CLUSTER

Set to `TRUE` in order to use `pg_dumpall` instead. Also set POSTGRES\_EXTRA\_OPTS to any value or empty since the default value is not compatible with `pg_dumpall`.

POSTGRES\_HOST

Postgres connection parameter; postgres host to connect to. Required.

POSTGRES\_PASSWORD

Postgres connection parameter; postgres password to connect with. Required.

POSTGRES\_PASSWORD\_FILE

Alternative to POSTGRES\_PASSWORD, for usage with docker secrets.

POSTGRES\_PASSFILE\_STORE

Alternative to POSTGRES\_PASSWORD in passfile format, for usage with postgres clusters.

POSTGRES\_PORT

Postgres connection parameter; postgres port to connect to. Defaults to `5432`.

POSTGRES\_USER

Postgres connection parameter; postgres user to connect with. Required.

POSTGRES\_USER\_FILE

Alternative to POSTGRES\_USER, for usage with docker secrets.

SCHEDULE

Cron-schedule specifying the interval between postgres backups. Defaults to `@daily`.

TZ

POSIX TZ variable specifying the timezone used to evaluate SCHEDULE cron (example "Europe/Paris").

WEBHOOK\_URL

URL to be called after an error or after a successful backup (POST with a JSON payload, check `hooks/00-webhook` file for more info). Default disabled.

WEBHOOK\_ERROR\_URL

URL to be called in case backup fails. Default disabled.

WEBHOOK\_PRE\_BACKUP\_URL

URL to be called when backup starts. Default disabled.

WEBHOOK\_POST\_BACKUP\_URL

URL to be called when backup completes successfully. Default disabled.

WEBHOOK\_EXTRA\_ARGS

Extra arguments for the `curl` execution in the webhook (check `hooks/00-webhook` file for more info).

#### Special Environment Variables

This variables are not intended to be used for normal deployment operations:

env variable

description

POSTGRES\_PORT\_5432\_TCP\_ADDR

Sets the POSTGRES\_HOST when the latter is not set.

POSTGRES\_PORT\_5432\_TCP\_PORT

Sets POSTGRES\_PORT when POSTGRES\_HOST is not set.

### How the backups folder works?

First a new backup is created in the `last` folder with the full time.

Once this backup finish succefully then, it is hard linked (instead of coping to avoid use more space) to the rest of the folders (daily, weekly and monthly). This step replaces the old backups for that category storing always only the latest for each category (so the monthly backup for a month is always storing the latest for that month and not the first).

So the backup folder are structured as follows:

-   `BACKUP_DIR/last/DB-YYYYMMDD-HHmmss.sql.gz`: all the backups are stored separatly in this folder.
-   `BACKUP_DIR/daily/DB-YYYYMMDD.sql.gz`: always store (hard link) the **latest** backup of that day.
-   `BACKUP_DIR/weekly/DB-YYYYww.sql.gz`: always store (hard link) the **latest** backup of that week (the last day of the week will be Sunday as it uses ISO week numbers).
-   `BACKUP_DIR/monthly/DB-YYYYMM.sql.gz`: always store (hard link) the **latest** backup of that month (normally the ~31st).

And the following symlinks are also updated after each successfull backup for simlicity:

```
BACKUP_DIR/last/DB-latest.sql.gz -> BACKUP_DIR/last/DB-YYYYMMDD-HHmmss.sql.gz
BACKUP_DIR/daily/DB-latest.sql.gz -> BACKUP_DIR/daily/DB-YYYYMMDD.sql.gz
BACKUP_DIR/weekly/DB-latest.sql.gz -> BACKUP_DIR/weekly/DB-YYYYww.sql.gz
BACKUP_DIR/monthly/DB-latest.sql.gz -> BACKUP_DIR/monthly/DB-YYYYMM.sql.gz
```

For **cleaning** the script removes the files for each category only if the new backup has been successfull. To do so it is using the following independent variables:

-   BACKUP\_KEEP\_MINS: will remove files from the `last` folder that are older than its value in minutes after a new successfull backup without affecting the rest of the backups (because they are hard links).
-   BACKUP\_KEEP\_DAYS: will remove files from the `daily` folder that are older than its value in days after a new successfull backup.
-   BACKUP\_KEEP\_WEEKS: will remove files from the `weekly` folder that are older than its value in weeks after a new successfull backup (remember that it starts counting from the end of each week not the beggining).
-   BACKUP\_KEEP\_MONTHS: will remove files from the `monthly` folder that are older than its value in months (of 31 days) after a new successfull backup (remember that it starts counting from the end of each month not the beggining).

### Hooks

The folder `hooks` inside the container can contain hooks/scripts to be run in differrent cases getting the exact situation as a first argument (`error`, `pre-backup` or `post-backup`).

Just create an script in that folder with execution permission so that run-parts can execute it on each state change.

Please, as an example take a look in the script already present there that implements the `WEBHOOK_URL` functionality.

### Manual Backups

By default this container makes daily backups, but you can start a manual backup by running `/backup.sh`.

This script as example creates one backup as the running user and saves it the working folder.

docker run --rm -v "$PWD:/backups" -u "$(id -u):$(id -g)" -e POSTGRES\_HOST=postgres -e POSTGRES\_DB=dbname -e POSTGRES\_USER=user -e POSTGRES\_PASSWORD=password  prodrigestivill/postgres-backup-local /backup.sh

### Automatic Periodic Backups

You can change the `SCHEDULE` environment variable in `-e SCHEDULE="@daily"` to alter the default frequency. Default is `daily`.

More information about the scheduling can be found here.

Folders `daily`, `weekly` and `monthly` are created and populated using hard links to save disk space.

Restore examples
----------------

Some examples to restore/apply the backups.

### Restore using the same container

To restore using the same backup container, replace `$BACKUPFILE`, `$CONTAINER`, `$USERNAME` and `$DBNAME` from the following command:

docker exec --tty --interactive $CONTAINER /bin/sh -c "zcat $BACKUPFILE | psql --username=$USERNAME --dbname=$DBNAME -W"

### Restore using a new container

Replace `$BACKUPFILE`, `$VERSION`, `$HOSTNAME`, `$PORT`, `$USERNAME` and `$DBNAME` from the following command:

docker run --rm --tty --interactive -v $BACKUPFILE:/tmp/backupfile.sql.gz postgres:$VERSION /bin/sh -c "zcat /tmp/backupfile.sql.gz | psql --host=$HOSTNAME --port=$PORT --username=$USERNAME --dbname=$DBNAME -W"

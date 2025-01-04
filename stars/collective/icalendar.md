---
project: icalendar
stars: 1012
description: icalendar parser library for Python
url: https://github.com/collective/icalendar
---

Internet Calendaring and Scheduling (iCalendar) for Python
==========================================================

The icalendar package is a RFC 5545 compatible parser/generator for iCalendar files.

* * *

Homepage:

https://icalendar.readthedocs.io

Code:

https://github.com/collective/icalendar

Mailing list:

https://github.com/collective/icalendar/issues

Dependencies:

python-dateutil and tzdata.

License:

BSD

* * *

Quick start guide
-----------------

`icalendar` enables you to **create**, **inspect** and **modify** calendaring information with Python.

To **install** the package, run:

pip install icalendar

### Inspect Files

You can open an `.ics` file and see all the events:

\>\>> import icalendar
\>\>> from pathlib import Path
\>\>> ics\_path \= Path("src/icalendar/tests/calendars/example.ics")
\>\>> with ics\_path.open() as f:
...     calendar \= icalendar.Calendar.from\_ical(f.read())
\>\>> for event in calendar.walk('VEVENT'):
...     print(event.get("SUMMARY"))
New Year's Day
Orthodox Christmas
International Women's Day

### Modify Content

Such a calendar can then be edited and saved again.

\>\>> calendar\["X-WR-CALNAME"\] \= "My Modified Calendar"  \# modify
\>\>> print(calendar.to\_ical()\[:129\])  \# save modification
BEGIN:VCALENDAR
VERSION:2.0
PRODID:collective/icalendar
CALSCALE:GREGORIAN
METHOD:PUBLISH
X\-WR\-CALNAME:My Modified Calendar

### Create Events, TODOs, Journals, Alarms, ...

`icalendar` supports the creation and parsing of all kinds of objects in the iCalendar (RFC 5545) standard.

\>\>> icalendar.Event()  \# events
VEVENT({})
\>\>> icalendar.FreeBusy()  \# free/busy times
VFREEBUSY({})
\>\>> icalendar.Todo()  \# Todo list entries
VTODO({})
\>\>> icalendar.Alarm()  \# Alarms e.g. for events
VALARM({})
\>\>> icalendar.Journal()   \# Journal entries
VJOURNAL({})

Have a look at more examples.

### Use timezones of your choice

With `icalendar`, you can localize your events to take place in different timezones. `zoneinfo`, `dateutil.tz` and `pytz` are compatible with `icalendar`. This example creates an event that uses all of the timezone implementations with the same result:

\>\>> import pytz, zoneinfo, dateutil.tz  \# timezone libraries
\>\>> import datetime, icalendar
\>\>> e \= icalendar.Event()
\>\>> tz \= dateutil.tz.tzstr("Europe/London")
\>\>> e\["X-DT-DATEUTIL"\] \= icalendar.vDatetime(datetime.datetime(2024, 6, 19, 10, 1, tzinfo\=tz))
\>\>> tz \= pytz.timezone("Europe/London")
\>\>> e\["X-DT-USE-PYTZ"\] \= icalendar.vDatetime(datetime.datetime(2024, 6, 19, 10, 1, tzinfo\=tz))
\>\>> tz \= zoneinfo.ZoneInfo("Europe/London")
\>\>> e\["X-DT-ZONEINFO"\] \= icalendar.vDatetime(datetime.datetime(2024, 6, 19, 10, 1, tzinfo\=tz))
\>\>> print(e.to\_ical())  \# the libraries yield the same result
BEGIN:VEVENT
X\-DT\-DATEUTIL;TZID\=Europe/London:20240619T100100
X\-DT\-USE\-PYTZ;TZID\=Europe/London:20240619T100100
X\-DT\-ZONEINFO;TZID\=Europe/London:20240619T100100
END:VEVENT

### Version 6 with zoneinfo

Version 6 of `icalendar` switches the timezone implementation to `zoneinfo`. This only affects you if you parse `icalendar` objects with `from_ical()`. The functionality is extended and is tested since 6.0.0 with both timezone implementations `pytz` and `zoneinfo`.

By default and since 6.0.0, `zoneinfo` timezones are created.

\>\>> dt \= icalendar.Calendar.example("timezoned").walk("VEVENT")\[0\]\["DTSTART"\].dt
\>\>> dt.tzinfo
ZoneInfo(key\='Europe/Vienna')

If you would like to continue to receive `pytz` timezones in parse results, you can receive all the latest updates, and switch back to earlier behavior:

\>\>> icalendar.use\_pytz()
\>\>> dt \= icalendar.Calendar.example("timezoned").walk("VEVENT")\[0\]\["DTSTART"\].dt
\>\>> dt.tzinfo
<DstTzInfo 'Europe/Vienna' CET+1:00:00 STD\>

Version 6 is on branch main. It is compatible with Python versions 3.8 - 3.13, and PyPy3. We expect the `main` branch with versions `6+` to receive the latest updates and features.

Related projects
----------------

-   icalevents. It is built on top of icalendar and allows you to query iCal files and get the events happening on specific dates. It manages recurrent events as well.
-   recurring-ical-events. Library to query an `icalendar.Calendar` object for events and other components happening at a certain date or within a certain time.
-   x-wr-timezone. Library and command line tool to make `icalendar.Calendar` objects and files from Google Calendar (using the non-standard `X-WR-TIMEZONE` property) compliant with the standard (RFC 5545).
-   ics-query. Command line tool to query iCalendar files for occurrences of events and other components.

Further Reading
---------------

You can find out more about this project:

-   Contributing
-   Changelog
-   License

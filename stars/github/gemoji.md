---
project: gemoji
stars: 4427
description: Emoji images and names.
url: https://github.com/github/gemoji
---

gemoji
======

This library contains character information about native emojis.

Installation
------------

Add `gemoji` to your Gemfile.

gem 'gemoji'

Example Rails Helper
--------------------

This would allow emojifying content such as: `it's raining :cat:s and :dog:s!`

See the Emoji cheat sheet for more examples.

module EmojiHelper
  def emojify(content)
    h(content).to\_str.gsub(/:(\[\\w+-\]+):/) do |match|
      if emoji \= Emoji.find\_by\_alias($1)
        %(<img alt="#$1" src="#{image\_path("emoji/#{emoji.image\_filename}")}" style="vertical-align:middle" width="20" height="20" />)
      else
        match
      end
    end.html\_safe if content.present?
  end
end

Unicode mapping
---------------

Translate emoji names to unicode and vice versa.

\>> Emoji.find\_by\_alias("cat").raw
\=> "🐱"  \# Don't see a cat? That's U+1F431.

>> Emoji.find\_by\_unicode("\\u{1f431}").name
\=> "cat"

Adding new emoji
----------------

You can add new emoji characters to the `Emoji.all` list:

emoji \= Emoji.create("music") do |char|
  char.add\_alias "song"
  char.add\_unicode\_alias "\\u{266b}"
  char.add\_tag "notes"
end

emoji.name #=> "music"
emoji.raw  #=> "♫"
emoji.image\_filename #=> "unicode/266b.png"

\# Creating custom emoji (no Unicode aliases):
emoji \= Emoji.create("music") do |char|
  char.add\_tag "notes"
end

emoji.custom? #=> true
emoji.image\_filename #=> "music.png"

As you create new emoji, you must ensure that you also create and put the images they reference by their `image_filename` to your assets directory.

You can customize `image_filename` with:

emoji \= Emoji.create("music") do |char|
  char.image\_filename \= "subdirectory/my\_emoji.gif"
end

For existing emojis, you can edit the list of aliases or add new tags in an edit block:

emoji \= Emoji.find\_by\_alias "musical\_note"

Emoji.edit\_emoji(emoji) do |char|
  char.add\_alias "music"
  char.add\_unicode\_alias "\\u{266b}"
  char.add\_tag "notes"
end

Emoji.find\_by\_alias "music"       #=> emoji
Emoji.find\_by\_unicode "\\u{266b}"  #=> emoji

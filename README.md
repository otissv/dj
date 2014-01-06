DJ
==

DJ is a set of mixins built in SCSS and Compass.

My first attemp at a library.  Done whilst learning  CSS and SASS.

The basic concept is quickly theme the UI by just changing variable.

Having everything as mixins
1. There are no class names to keeps HTML symantic.
2. Reduces bloat. If the mixin is not included in a class then it will not be compiled.


Browser-Support
---------------

DJ supports Chrome, Safari, Firefox, Opera, Internet Explorer 9+.

* IE9 does not support placeholders, table round corners and flip table
* Safari does not support image circle and adds a space between inline elements for button group, input groups and pagination

Still lots to be done and bugs to fix. Would like to add IE8 support too.

Install
-------

1. Install Comapass. Instructions at http://compass-style.org/
2. Clone this repo git clone https://github.com/otissv/dj.git or
   downlaod from https://github.com/otissv/dj/archive/master.zip and unzip into you project.
3. At the top of your web project .scss file add  @import "dj";

[Demo]

Information on using SASS can be found at http://sass-lang.com.

License
----

MIT

[Demo]:http://otissv.github.io/dj

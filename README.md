DJ
==

DJ is a set of mixins built in SCSS and Compass.

My first attemp at a library.  Done whilst learning  CSS and SASS.

Concept
-------

The basic concept is quickly re-theme the UI.

* There are no class names to help keep HTML symantic.
* Reduces bloat by only compiling CSS mixins that you have included.
* Quickly theme your app UI by just changing easily found variable.
* Uses HTML5 and CSS3.
* Works in all major modern browsers.


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
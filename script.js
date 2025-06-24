/*Welcome to the script file! Your 1st time here, you should update
  the basic info section to include your name and website/social 
  media link (if desired). Most of the time, you will just come
  here to update the posts array. However, you can also edit or
  add your own scripts to do whatever you like!*/

//TABLE OF CONTENTS
  // 1. Basic Info
  // 2. Posts Array
  // 3. Creating HTML Sections to Be Inserted (Header, Footer, etc)
  // 4. Inserting the Sections Into our Actual HTML Pages

//-----------------------------

//==[ 1. BASIC INFO ]==

let blogName = "Blog";
let authorName = "Slushienova";
let authorLink = ""; // Enter your website, social media, etc. Some way for people to tell you they like your blog! (Leaving it empty is okay too)

//-----------------------------

//==[ 2. POSTS ARRAY ]==

/*Each time you make a new post, add the filepath here at the top of postsArray.
  This will cause all the right links to appear and work.
  NOTE: It's important to follow this exact naming convention, because the scripts
  below are expecting it ( 'posts/YYYY-MM-DD-Title-of-Your-Post.html', ). You can
  alter the scripts if you want to use a different naming convention*/
/*UPDATE: as of version 1.3, you may omit the date if you would like. But if you
  use a date it must still follow that format.*/


let pHTML = 'Posts';
let postsArray = [
//[ "posts/2020-11-10-Special-Characters-Example.html", encodeURI( 'Spéci@l "Character\'s" Examp|e' ) ]
//[ "posts/2020-11-10-My-Third-Post-Example.html" ],
//[ "posts/2020-11-10-My-Second-Post-Example.html" ],
["posts/2025-03-31-BuildLog003-Wooden-Airship-Puzzle.html"],
["posts/2025-03-25-ArtLog031-Gift-Art-Kuro.html"],
["posts/2025-01-26-ArtLog030-Another-Clover.html"],
["posts/2025-01-14-ArtLog029-Secret-Santa-GaddTheThief.html"],
["posts/2024-12-31-MemoryLog001-My-Dear-Friend,-Teddy.html"],
["posts/2024-12-28-ArtLog028-RaveStation.html"],
["posts/2024-12-22-ArtLog027-For-Sn0wy.html"],
["posts/2024-11-09-ArtLog026-For-Rin.html"],
["posts/2024-11-06-ArtLog025-New-Noizy-Page-Art.html"],
["posts/2024-09-10-ArtLog024-Blue-tan.html"],
["posts/2024-09-07-ArtLog023-Vivi.html"],
["posts/2024-09-07-ArtLog022-Zoe-Page-Art.html"],
["posts/2024-08-15-ArtLog021-Noizy-Page-Art.html"],
["posts/2024-07-10-ArtLog020-CassuP0p-Art-Trade.html"],
["posts/2024-06-25-ArtLog019-Porika.html"],
["posts/2024-06-22-ArtLog018-5AM-Clover.html"],
["posts/2024-04-24-ArtLog017-Particles.html"],
["posts/2024-03-29-ArtLog016-Clover.html"],
["posts/2024-02-07-ArtLog015-Noizy.html"],
["posts/2024-01-09-ArtLog014-Purple.html"],
["posts/2023-11-10-BuildLog002-Gramophone-Puzzle.html"],
["posts/2023-10-31-ArtLog013-Ilona-and-Odette.html"],
["posts/2023-10-04-ArtLog012-Linh-and-Niko.html"],
["posts/2023-09-02-ArtLog011-Yulia.html"],
["posts/2023-08-09-ArtLog010-Charlotte.html"],
[ "posts/2023-08-03-TechLog003-Radio.html"],
[ "posts/2023-07-31-ArtLog009-Orange.html"],
[ "posts/2023-06-23-ArtLog008-CQ-Animation.html"],
[ "posts/2023-05-10-ArtLog007-Apple.html" ],
[ "posts/2023-05-02-ArtLog006-Gravity.html" ],
[ "posts/2023-04-15-ArtLog005-Slush.html" ],
[ "posts/2023-03-20-ArtLog004-EverLasting.html" ],
[ "posts/2023-03-13-BuildLog001-Music-Box-Puzzle.html" ],
[ "posts/2023-03-12-First-Post.html" ],
[ "posts/2023-03-01-ArtLog003-Noizy.html" ],
[ "posts/2023-02-18-TechLog002-Quality-of-Life-Changes-to-My-PC-Experience.html"],
[ "posts/2023-02-05-TechLog001-Boombox.html"],
[ "posts/2023-02-03-DQB2Log001-Making-a-City.html" ],
[ "posts/2023-02-02-ArtLog002-A-Still-Nameless-Character.html" ],
[ "posts/2023-02-02-ArtLog001-Vivi.html" ]
];

//-----------------------------

//==[ 3. CREATING HTML SECTIONS TO BE INSERTED ]==

let url = window.location.pathname;

//The date format to look for is 4 digits, hyphen, 2 digits, hyphen, 2 digits, hyphen.
const postDateFormat = /\d{4}\-\d{2}\-\d{2}\-/;

//Check if you are in posts (if so, the links will have to go up a directory)
let relativePath = ".";
if ( url.includes("posts/") ) {
  relativePath = "..";
}

//Header
let topHTML = '<sub>☆</sub><sub>Slushienova - The Polar Refresh</sub>' + 
'<hr class="divider"></hr>' + 
'<div id="banner"></div>' +
'<link rel="icon" href="./images/favicon.png" type="image/x-icon" />'
;

let topAltHTML = '<sub>☆</sub><sub>Slushienova</sub>' + 
'<hr class="divider"></hr>'
;

let topBlogHTML = '<sub>☆</sub><sub>Slushienova Blog - For when I feel like going on a tangent about nothing! </sub>' + 
'<hr class="divider"></hr>' + 
'<div id="banner"></div>'
;

let topBlogAltHTML = '<sub>☆</sub><sub>Slushienova Blog - For when I feel like going on a tangent about nothing! </sub>' + 
'<hr class="divider"></hr>'
;

let navigateHTML = '<center><ul><div class="btn-group" style="width:100%"> <div class="vlBLue"></div>' + 
'<li><a href="' + relativePath + '/home.html"><button style="width:50px">☆</button></a></li>' + 
'<li><a href="' + relativePath + '/about.html"><button style="width:90px">About</button></a></li>' + 
'<li><a href="' + relativePath + '/gallery.html"><button style="width:90px">My Art</button></a></li>' + 
'<li><a href="' + relativePath + '/characters/worlds.html"><button style="width:100px">Characters</button></a></li>' + 
'<li><a href="' + relativePath + '/webgarden-greenhouse.html"><button style="width:110px">Greenhouse</button></a></li>' +
'<li><a href="' + relativePath + '/collections.html"><button style="width:100px">Collections</button></a></li>' +
'<li><a href="' + relativePath + '/links.html"><button style="width:90px">Links</button></a></li></center>' + 
 
'<div class="vlBLue"></div></div></ul>' ;

let navBlogHTML = '<center><ul><div class="btn-blog" style="width:100%"> <li><a href="' + relativePath + '/blog.html"><button style="width:40px">☆</button></a></li>' + 
'<li><a href="' + relativePath + '/blog-artlog.html"><button style="width:100px">ArtLog</button></a></li>' + 
'<li><a href="' + relativePath + '/blog-buildlog.html"><button style="width:100px">BuildLog</button></a></li>' + 
'<li><a href="' + relativePath + '/blog-techlog.html"><button style="width:100px">TechLog</button></a></li>' +
'<li><a href="' + relativePath + '/blog-memorylog.html"><button style="width:100px">MemoryLog</button></a></li>' + 
'<li><a href="' + relativePath + '/blog-archive.html"><button style="width:100px">Archive</button></a></li></ul></div></center>' ;

//Content HTML in case i need this




//Write the Footer HTML, which has information about the blog.
let footerHTML = '<center><a href="https://slushienova.neocities.org/feed.xml"><img src="https://slushienova.neocities.org/images/RSS_Logo%20small.png" height="20px" width="20px"></a></center>' 
+ '<hr class="divider">' + 
"<center><p>Hosted on <a href='https://neocities.org'>Neocities</a>. Built with <a href='https://zonelets.net'>Zonelets</a>! </p></center> ";

let footerBlogHTML = '<center><a href="https://slushienova.neocities.org/feed.xml"><img src="https://slushienova.neocities.org/images/RSS_Logo%20small.png" height="20px" width="20px"></a></center>' + '<hr class="divider">' + 
"<sub>" + blogName + " is written by <a href='" + authorLink + "'>" + authorName + "</a>, built with <a href='https://zonelets.net/'>Zonelets</a>, and hosted by <a href='https://neocities.org/'>Neocities!</a></sub>";

//To do the following stuff, we want to know where we are in the posts array (if we're currently on a post page).
let currentIndex = -1;
let currentFilename = url.substring(url.lastIndexOf('posts/'));
//Depending on the web server settings (Or something?), the browser url may or may not have ".html" at the end. If not, we must add it back in to match the posts array. (12-19-2022 fix)
if ( ! currentFilename.endsWith(".html") ) {
    currentFilename += ".html";
}
let i;
for (i = 0; i < postsArray.length; i++) {
  if ( postsArray[i][0] === currentFilename ) {
    currentIndex = i;
  }
}

//Convert the post url to readable post name. E.g. changes "2020-10-10-My-First-Post.html" to "My First Post"
//Or pass along the "special characters" version of the title if one exists
function formatPostTitle(i) {
  // Check if there is an alternate post title
  if ( postsArray[i].length > 1 ) {
    //Remember how we had to use encodeURI for special characters up above? Now we use decodeURI to get them back.
    return decodeURI(postsArray[i][1]);
  } else { 
  //If there is no alternate post title, check if the post uses the date format or not, and return the proper title
	if (  postDateFormat.test ( postsArray[i][0].slice( 6,17 ) ) ) {
	  return postsArray[i][0].slice(17,-5).replace(/-/g," ");
    } else {
      return postsArray[i][0].slice(6,-5).replace(/-/g," ");
    }
  }
}

//Get the current post title and date (if we are on a post page)
let currentPostTitle = "";
let niceDate = "";
if ( currentIndex > -1 ) {
  currentPostTitle = formatPostTitle( currentIndex );
  //Generate the "nice to read" version of date
  if (  postDateFormat.test ( postsArray[currentIndex][0].slice( 6,17 ) ) ) {
    let monthSlice = postsArray[currentIndex][0].slice( 11,13 );
    let month = "";
    if ( monthSlice === "01") { month = "Jan";}
    else if ( monthSlice === "02") { month = "Feb";}
    else if ( monthSlice === "03") { month = "Mar";}
    else if ( monthSlice === "04") { month = "Apr";}
    else if ( monthSlice === "05") { month = "May";}
    else if ( monthSlice === "06") { month = "Jun";}
    else if ( monthSlice === "07") { month = "Jul";}
    else if ( monthSlice === "08") { month = "Aug";}
    else if ( monthSlice === "09") { month = "Sep";}
    else if ( monthSlice === "10") { month = "Oct";}
    else if ( monthSlice === "11") { month = "Nov";}
    else if ( monthSlice === "12") { month = "Dec";}
	niceDate = postsArray[currentIndex][0].slice( 14,16 ) + " " + month + ", " + postsArray[currentIndex][0].slice( 6,10 );
  }
}

//Generate the Post List HTML, which will be shown on the "Archive" page.

function formatPostLink(i) {
  let postTitle_i = "";
  if ( postsArray[i].length > 1 ) {
    postTitle_i = decodeURI(postsArray[i][1]);
  } else {
	if (  postDateFormat.test ( postsArray[i][0].slice( 6,17 ) ) ) {
	  postTitle_i = postsArray[i][0].slice(17,-5).replace(/-/g," ");
    } else {
      postTitle_i = postsArray[i][0].slice(6,-5).replace(/-/g," ");
    }
  }
  if (  postDateFormat.test ( postsArray[i][0].slice( 6,17 ) ) ) {
    return '<li><a href="' + relativePath + '/'+ postsArray[i][0] +'">' + postsArray[i][0].slice(6,16) + " \u00BB " + postTitle_i + '</a></li>';
  } else {
    return '<li><a href="' + relativePath + '/'+ postsArray[i][0] +'">' + postTitle_i + '</a></li>';
  }
}

let postListHTML = "<ul>";
for ( let i = 0; i < postsArray.length; i++ ) {
  postListHTML += formatPostLink(i);
}
postListHTML += "</ul>";

//Generate the Recent Post List HTML, which can be shown on the home page (or wherever you want!)
let recentPostsCutoff = 4; //Hey YOU! Change this number to set how many recent posts to show before cutting it off with a "more posts" link.
let recentPostListHTML = "<h2>Recent Posts:</h2><ul>" + '<hr class="divider"></hr>' ;
let numberOfRecentPosts = Math.min( recentPostsCutoff, postsArray.length );
for ( let i = 0; i < numberOfRecentPosts; i++ ) {
  recentPostListHTML += formatPostLink(i);
}
/*If you've written more posts than can fit in the Recent Posts List,
  then we'll add a link to the archive so readers can find the rest of
  your wonderful posts and be filled with knowledge.*/


//Generate the Next and Previous Post Links HTML
let nextprevHTML = "";
let nextlink = "";
let prevlink = "";

/*If you're on the newest blog post, there's no point to
 a "Next Post" link, right? And vice versa with the oldest 
 post! That's what the following code handles.*/
if ( postsArray.length < 2 ) {
  nextprevHTML = '<a href="' + relativePath + '/index.html">Home</a>';
} else if ( currentIndex === 0 ) {
  prevlink = postsArray[currentIndex + 1][0];
  nextprevHTML = '<a href="' + relativePath + '/index.html">Home</a> | <a href="'+ relativePath + '/' + prevlink +'">Previous Post \u00BB</a>';
} else if ( currentIndex === postsArray.length - 1 ) {
  nextlink = postsArray[currentIndex - 1][0];
  nextprevHTML = '<a href="' + relativePath + '/' + nextlink +'">\u00AB Next Post</a> | <a href="' + relativePath + '/index.html">Home</a>';
} else if ( 0 < currentIndex && currentIndex < postsArray.length - 1 ) {
  nextlink = postsArray[currentIndex - 1][0];
  prevlink = postsArray[currentIndex + 1][0];
  nextprevHTML = '<a href="' + relativePath + '/'+ nextlink +'">\u00AB Next Post</a> | <a href="' + relativePath + '/index.html">Home</a> | <a href="' + relativePath + '/'+ prevlink +'">Previous Post \u00BB</a>';
}


//-----------------------------

//==[ 4. INSERTING THE SECTIONS INTO OUR ACTUAL HTML PAGES ]==

/*Here we check if each relevant div exists. If so, we inject the correct HTML!
  NOTE: All of these sections are optional to use on any given page. For example, if there's 
  one particular blog post where we don't want the footer to appear, 
  we simply don't put a <div id="footer"> on that page.*/

if (document.getElementById("nextprev")) {
  document.getElementById("nextprev").innerHTML = nextprevHTML;
}
if (document.getElementById("postlistdiv")) {
  document.getElementById("postlistdiv").innerHTML = postListHTML;
}
if (document.getElementById("recentpostlistdiv")) {
  document.getElementById("recentpostlistdiv").innerHTML = recentPostListHTML;
}

if (document.getElementById("top")) {
  document.getElementById("top").innerHTML = topHTML;
}

if (document.getElementById("topAlt")) {
  document.getElementById("topAlt").innerHTML = topAltHTML;
}

if (document.getElementById("navigate")) {
  document.getElementById("navigate").innerHTML = navigateHTML;
}

if (document.getElementById("postTitleH1")) {
  document.getElementById("postTitleH1").innerHTML = currentPostTitle;
}
if (document.getElementById("postDate")) {
  document.getElementById("postDate").innerHTML = niceDate;
}
if (document.getElementById("footer")) {
  document.getElementById("footer").innerHTML = footerHTML;
}

if (document.getElementById("topBlog")) {
  document.getElementById("topBlog").innerHTML = topBlogHTML;
}

if (document.getElementById("topBlogAlt")) {
  document.getElementById("topBlogAlt").innerHTML = topBlogAltHTML;
}

if (document.getElementById("contentBlog")) {
  document.getElementById("contentBlog").innerHTML = contentBlogHTML;
}

if (document.getElementById("navBlog")) {
  document.getElementById("navBlog").innerHTML = navBlogHTML;
}

if (document.getElementById("blogTitleH1")) {
  document.getElementById("blogTitleH1").innerHTML = blogTitle;
}

if (document.getElementById("footerBlog")) {
  document.getElementById("footerBlog").innerHTML = footerBlogHTML;
}

//Dynamically set the HTML <title> tag from the postTitle variable we created earlier
//The <title> tag content is what shows up on browser tabs
if (document.title === "Blog Post") {
  document.title = currentPostTitle;
}

//Clock
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();


  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

 
  const timeString = `${hours}:${minutes}:${seconds}`;

 
  document.getElementById('clock').textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);

function formatDate(date) {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = date.getFullYear();
  
  return `${day}/${month}/${year}`;
}

function displayDate() {
  const now = new Date();
  const formattedDate = formatDate(now);
  
  document.getElementById('date-container').textContent = formattedDate;
}

displayDate();

(function titleScroller(text) {
  document.title = text;
  setTimeout(function () {
      titleScroller(text.substr(1) + text.substr(0, 1));
  }, 500);
}("☆ The Polar Refresh "));

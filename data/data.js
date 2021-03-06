export const courses = [
	{
		id: 1,
		title: 'HTML',
		short_description:
			'HTML is the standard markup language for Web pages.With HTML you can create your own Website layout.In this HTML tutorial, you will find interview related questions and htm/css templates/projects.',
		action: {
			Questions: {
				heading: 'HTML Interview Questions',
				url: '/htmlQuestion',
			},
			Templates: {
				heading: 'HTML/CSS Templates',
				url: '/htmlCssTemplate',
			},
		},
	},
	{
		id: 2,
		title: 'CSS',
		short_description:
			'CSS is the language we use to style an HTML document.CSS describes how HTML elements should be displayed.This tutorial will help you to find interview questions and html/css templates/projects.',
		action: {
			Questions: {
				heading: 'CSS Interview Questions',
				url: '/cssQuestion',
			},
			Templates: {
				heading: 'HTML/CSS Templates',
				url: '/htmlCssTemplate',
			},
		},
		heading: 'CSS Interview Questions',
	},
	{
		id: 3,
		title: 'JAVASCRIPT',
		short_description:
			'JavaScript is the programming language of the Web.In this Javascript tutorial, you will find topic wise javascript explains and projects',
		action: {
			Questions: {
				heading: 'JavaScript Tutorial',
				url: '/javascriptLearn',
			},
			Templates: {
				heading: 'JavaScript Projects',
				url: '/javascriptTemplate',
			},
		},
		heading: 'Javascript Tutorial',
	},
	{
		id: 4,
		title: 'REACT',
		short_description: 'No Data Available Now',
		action: {
			Questions: {
				heading: 'React JS Tutorial',
				url: '/reactQuestion',
			},
			Templates: {
				heading: 'React JS Projects',
				url: '/reactTemplate',
			},
		},
		heading: 'React Interview Questions',
	},
];

export const htmlQuestion = [
	{
		id: 1,
		Ques: 'Are the HTML tags and elements the same thing?',
		Ans: (
			<p className="m0">
				No. HTML elements are defined by a starting tag, may contain some
				content and a closing tag but HTML tag is defined by starting and ending
				tag
			</p>
		),
		example: [],
	},
	{
		id: 2,
		Ques: 'What are tags and attributes in HTML',
		Ans: (
			<p className="m0">
				Tags are the primary component of the HTML that defines how the content
				will be structured/ formatted, whereas Attributes are used along with
				the HTML tags to define the characteristics of the element.
			</p>
		),
		example: [],
	},
	{
		id: 3,
		Ques: 'What are void elements in HTML?',
		Ans: (
			<p className="m0">
				HTML elements which do not have closing tags or do not need to be closed
				are Void elements.
				<br />
				For Example &lt;br/&gt;, &lt;img/&gt; etc. tag
			</p>
		),
		example: [],
	},
	{
		id: 4,
		Ques: 'What are HTML Entities?',
		Ans: (
			<p className="m0">
				In HTML some characters are reserved like ???&lt;???, ???&gt;???, ???&frasl;???,
				etc. To use these characters in our webpage we need to use the character
				entities called HTML Entities <br />
			</p>
		),
		example: [
			{
				title: 'Reference Chart',
				url: 'https://www.w3schools.com/html/html_entities.asp',
			},
		],
	},
	{
		id: 5,
		Ques: 'What are different types of lists in HTML?',
		Ans: (
			<p className="m0">
				1. unordered list
				<br />
				2. ordered list
				<br />
				3. description list
				<br />
			</p>
		),
		example: [
			{
				title: 'unordered list',
				url: 'https://jsfiddle.net/x0honp8g/',
			},
			{
				title: 'ordered list',
				url: 'https://jsfiddle.net/y280zqun/3/',
			},
			{
				title: 'description list',
				url: '',
			},
		],
	},
	{
		id: 6,
		Ques: 'Define multipart form data?',
		Ans: (
			<p className="m0">
				Multipart form data is one of the values of the enctype attribute. It is
				used to send the file data to the server-side for processing. The other
				valid values of the enctype attribute are text/plain and
				application/x-www-form-urlencoded.
			</p>
		),
		example: [],
	},
	{
		id: 7,
		Ques: 'Describe HTML layout structure.',
		Ans: (
			<div className="m0">
				<p>
					Every web page has different components to display the intended
					content and a specific UI. But still, there are few things which are
					templated and are globally accepted way to structure the web page,
					such as:
				</p>

				<ul>
					<li>
						<b> &lt;header&gt;:</b> Stores the starting information about the
						web page.
					</li>
					<li>
						<b>&lt;footer&gt;:</b> Represents the last section of the page.
					</li>
					<li>
						<b>&lt;nav&gt;:</b> The navigation menu of the HTML page.
					</li>
					<li>
						<b>&lt;article&gt;:</b> It is a set of information.
					</li>
					<li>
						<b>&lt;section&gt;:</b> It is used inside the article block to
						define the basic structure of a page.
					</li>
					<li>
						<b>&lt;aside&gt;:</b> Sidebar content of the page.
					</li>
				</ul>
			</div>
		),
		example: [],
	},
	{
		id: 8,
		Ques: 'How to optimize website assets loading?',
		Ans: (
			<div className="m0">
				<p>
					To optimize website load time we need to optimize its asset loading
					and for that:
				</p>

				<ul>
					<li>
						<b>CDN hosting:</b> A CDN or content delivery network is
						geographically distributed servers to help reduce latency.
					</li>
					<li>
						<b>File compression:</b> This is a method that helps to reduce the
						size of an asset to reduce the data transfer
					</li>
					<li>
						<b>File concatenation:</b> This reduces the number of HTTP calls
					</li>
					<li>
						<b>Minify scripts:</b> This reduces the overall file size of js and
						CSS files
					</li>
					<li>
						<b>Parallel downloads:</b> Hosting assets in multiple subdomains can
						help to bypass the download limit of 6 assets per domain of all
						modern browsers. This can be configured but most general users never
						modify these settings
					</li>
					<li>
						<b> Lazy Loading:</b> Instead of loading all the assets at once, the
						non-critical assets can be loaded on a need basis
					</li>
				</ul>
			</div>
		),
		example: [],
	},
	{
		id: 9,
		Ques: 'What are the various formatting tags in HTML?',
		Ans: (
			<div className="m0">
				<p>HTML has various formatting tags:</p>

				<ul>
					<li>
						<b> &lt;b&gt;</b>- makes text bold
					</li>
					<li>
						<b>&lt;i&gt;</b>- makes text italic
					</li>
					<li>
						<b>&lt;em&gt;</b> - makes text italic but with added semantics
						importance
					</li>
					<li>
						<b>&lt;big&gt;</b> - increases the font size of the text by one unit
					</li>
					<li>
						<b>&lt;small&gt;</b> - decreases the font size of the text by one
						unit
					</li>
					<li>
						<b>&lt;sub&gt;</b> - makes the text a subscript
					</li>
					<li>
						<b>&lt;sup&gt;</b> - makes the text a supscript
					</li>
					<li>
						<b>&lt;strong&gt;</b> - marks the text as important
					</li>
					<li>
						<b>&lt;mark&gt;</b> - highlights the text
					</li>

					<li>
						<b>&lt;del&gt;</b> - displays as strike out text
					</li>
					<li>
						<b>&lt;ins&gt;</b> - displays as added text
					</li>
				</ul>
			</div>
		),
		example: [],
	},
	{
		id: 10,
		Ques: 'What are the different kinds of Doctypes available?',
		Ans: (
			<div className="m0">
				<p>The three kinds of Doctypes which are available:</p>

				<ul>
					<li>Strict Doctype </li>
					<li>Transitional Doctype</li>
					<li>Frameset Doctype</li>
				</ul>
			</div>
		),
		example: [],
	},
	{
		id: 11,
		Ques: 'Please explain how to indicate the character set being used by a document in HTML?',
		Ans: (
			<div className="m0">
				<p>
					The character set is defined in &lt;meta&gt; tag inside &lt;head&gt;
					element.
				</p>
			</div>
		),
		example: [
			{
				title: 'Learn More',
				url: 'https://www.w3schools.com/tags/att_charset.asp#:~:text=When%20used%20by%20the%20%3Cmeta,in%20an%20external%20script%20file.',
			},
		],
	},
	{
		id: 12,
		Ques: 'What is the difference between <strong>, <b> tags and <em>, <i> tags?',
		Ans: (
			<div className="m0">
				<p>
					The effect on a normal webpage of the tags &lt;strong&gt;, &lt;b&gt;
					and &lt;em&gt;&lt;em/&gt; &lt;i&gt; is the same. &lt;b&gt; and
					&lt;i&gt; tags stands for bold and italic. These two tags only apply
					font styling and bold tag &lt;b&gt;, just adds more ink to the text,
					these tags don`t say anything about the text.
				</p>
				<p>
					Whereas,&lt;strong&gt; and &lt;em&gt; tags represent that the span of
					text is of strong importance or more importance and emphatic stress
					respectively than the rest of the text. These tags have semantic
					meaning.
				</p>
			</div>
		),
		example: [],
	},
	{
		id: 13,
		Ques: 'What is the significance of <head> and <body> tag in HTML?',
		Ans: (
			<div className="m0">
				<p>
					&lt;head&gt; tag provides the information about the document. It
					should always be enclosed in the &lt;html&gt; tag. This tag contains
					the metadata about the webpage and the tags which are enclosed by head
					tag like &lt;link&gt;, &lt;meta&gt;, &lt;style&gt;, &lt;script&gt;,
					etc. are not displayed on the web page. Also, there can be only 1
					&lt;head&gt; tag in the entire Html document and will always be before
					the &lt;body&gt; tag.
				</p>
				<p>
					&lt;body&gt; tag defines the body of the HTML document. It should
					always be enclosed in the &lt;html&gt; tag. All the contents which
					needs to be displayed on the web page like images, text, audio, video,
					contents, using elements like &lt;p&gt;, &lt;img&gt;, &lt;audio&gt;,
					&lt;heading&gt;, &lt;video&gt;, &lt;div&gt;, etc. will always be
					enclosed by the &lt;body&gt; tag. Also, there can be only 1 body
					element in an HTML document and will always be after the &lt;head&gt;
					tag
				</p>
			</div>
		),
		example: [],
	},
	{
		id: 14,
		Ques: 'Can we display a web page inside a web page or Is nesting of webpages possible?',
		Ans: (
			<div className="m0">
				<p>
					Yes, we can display a web page inside another HTML web page. HTML
					provides a tag &lt;iframe&gt; using which we can achieve this
					functionality.
				</p>
				<p>&lt;iframe src=???url of the web page to embed??? /&gt;</p>
			</div>
		),
		example: [],
	},
	{
		id: 15,
		Ques: 'How is Cell Padding different from Cell Spacing?',
		Ans: (
			<div className="m0">
				<p>
					Cell Spacing is the space or gap between two consecutive cells.
					Whereas, Cell Padding is the space or gap between the text/ content of
					the cell and the edge/ border of the cell. Please refer to the above
					figure example to find the difference.
				</p>
			</div>
		),
		example: [],
	},
	{
		id: 16,
		Ques: 'How can we club two or more rows or columns into a single row or column in an HTML table?',
		Ans: (
			<div className="m0">
				<p>
					HTML provides two table attributes ???rowspan??? and ???colspan??? to make a
					cell span to multiple rows and columns respectively
				</p>
			</div>
		),
		example: [],
	},
	{
		id: 17,
		Ques: 'Is it possible to change an inline element into a block level element?',
		Ans: (
			<div className="m0">
				<p>
					Yes, it is possible using the ???display??? property with its value as
					???block???, to change the inline element into a block-level element.
				</p>
			</div>
		),
		example: [],
	},
	{
		id: 18,
		Ques: 'In how many ways can we position an HTML element? Or what are the permissible values of the position attribute?',
		Ans: (
			<div className="m0">
				<p>
					There are mainly 7 values of position attribute that can be used to
					position an HTML element:
				</p>
				<ol>
					<li>
						<b>static:</b> Default value. Here the element is positioned
						according to the normal flow of the document.
					</li>
					<li>
						<b>absolute:</b> Here the element is positioned relative to its
						parent element. The final position is determined by the values of
						left, right, top, bottom.
					</li>
					<li>
						<b>fixed:</b> This is similar to absolute except here the elements
						are positioned relative to the &lt;html&gt; element.
					</li>
					<li>
						<b>relative:</b> Here the element is positioned according to the
						normal flow of the document and positioned relative to its original/
						normal position
					</li>
					<li>
						<b>initial:</b> This resets the property to its default value
					</li>
					<li>
						<b>inherit:</b> Here the element inherits or takes the property of
						its parent.
					</li>
				</ol>
			</div>
		),
		example: [],
	},
	{
		id: 19,
		Ques: 'In how many ways you can display HTML elements?',
		Ans: (
			<div className="m0">
				<p>
					There are mainly 7 values of position attribute that can be used to
					position an HTML element:
				</p>
				<ol>
					<li>
						<b>inline:</b> Using this we can display any block-level element as
						an inline element. The height and width attribute values of the
						element will not affect.
					</li>
					<li>
						<b>block:</b> using this, we can display any inline element as a
						block-level element.
					</li>
					<li>
						<b>inline-block:</b>This property is similar to inline, except by
						using the display as inline-block, we can actually format the
						element using height and width values.
					</li>
					<li>
						<b>flex:</b>It displays the container and element as a flexible
						structure. It follows flexbox property.
					</li>
					<li>
						<b>inline-flex:</b> It displays the flex container as an inline
						element while its content follows the flexbox properties.
					</li>
					<li>
						<b>grid:</b> It displays the HTML elements as a grid container.
					</li>
					<li>
						<b>none:</b> Using this property we can hide the HTML element.
					</li>
				</ol>
			</div>
		),
		example: [],
	},
	{
		id: 20,
		Ques: 'What is the difference between ???display: none??? and ???visibility: hidden???, when used as attributes to the HTML element.',
		Ans: (
			<div className="m0">
				<p>
					When we use the attribute ???visibility: hidden??? for an HTML element
					then that element will be hidden from the webpage but still takes up
					space. Whereas, if we use the ???display: none??? attribute for an HTML
					element then the element will be hidden, and also it won???t take up any
					space on the webpage.
				</p>
			</div>
		),
		example: [],
	},
	{
		id: 21,
		Ques: 'What is SVG?',
		Ans: (
			<div className="m0">
				<p>
					HTML SVG is used to describe the two-dimensional vector and
					vector/raster graphics. SVG images and their behaviors are defined in
					XML text files. So as XML files, you can create and edit an SVG image
					with the text editor. It is mostly used for vector type diagrams like
					pie charts, 2-Dimensional graphs in an X, Y coordinate system.
				</p>
			</div>
		),
		example: [
			{
				title: 'Code',
				url: 'https://jsfiddle.net/yrt53j8s/',
			},
		],
	},
	{
		id: 22,
		Ques: 'Why is a URL encoded in HTML?',
		Ans: (
			<div className="m0">
				<p>
					An URL is encoded to convert non-ASCII characters into a format that
					can be used over the Internet because a URL is sent over the Internet
					by using the ASCII character-set only. If a URL contains characters
					outside the ASCII set, the URL has to be converted. The non-ASCII
					characters are replaced with a % followed by hexadecimal digits.
				</p>
			</div>
		),
		example: [],
	},
	{
		id: 23,
		Ques: 'Does a <!DOCTYPE html> tag is a HTML tag?',
		Ans: (
			<div className="m0">
				<p>
					No, the &lt;!DOCTYPE html&gt; declaration is not an HTML tag. There
					are many type of HTML e.g. HTML 4.01 Strict, HTML 4.01 Transitional,
					HTML 4.01 Frameset, XHTML 1.0 Strict, XHTML 1.0 Transitional, XHTML
					1.0 Frameset, XHTML 1.1 etc. So, &lt;!DOCTYPE html&gt; is used to
					instruct the web browser about the HTML page.
				</p>
			</div>
		),
		example: [],
	},
	{
		id: 24,
		Ques: 'Is there any need to change the web browsers to support HTML5?',
		Ans: (
			<div className="m0">
				<p>
					No. Almost all browsers (updated versions) support HTML 5. For example
					Chrome, Firefox, Opera, Safari, IE.
				</p>
			</div>
		),
		example: [],
	},
	{
		id: 25,
		Ques: 'Which type of video formats are supported by HTML5?',
		Ans: (
			<div className="m0">
				<p>HTML 5 supports three types of video format:</p>
				<ol>
					<li>Mp4</li>
					<li>WebM</li>
					<li>Ogg</li>
				</ol>
			</div>
		),
		example: [
			{
				title: 'Audio',
				url: 'https://jsfiddle.net/0ynw5m98/',
			},
			{
				title: 'Video',
				url: 'https://jsfiddle.net/y7egr5t2/2/',
			},
		],
	},
	{
		id: 26,
		Ques: 'What is the use of figure tag in HTML 5?',
		Ans: (
			<div className="m0">
				<p>
					The figure tag is used to add a photo in the document on the web page.
					It is used to handle the group of diagrams, photos, code listing with
					some embedded content.
				</p>
			</div>
		),
		example: [
			{
				title: 'Code',
				url: 'https://jsfiddle.net/ptuxsbm9/',
			},
		],
	},
	{
		id: 27,
		Ques: 'What is the use of details and summary tag?',
		Ans: (
			<div className="m0">
				<p>
					The details tag is used to specify some additional details on the web
					page. It can be viewed or hidden on demand. The summary tag is used
					with details tag. More details.
				</p>
			</div>
		),
		example: [],
	},
	{
		id: 28,
		Ques: 'What is datalist tag?',
		Ans: (
			<div className="m0">
				<p>
					The HTML 5 datalist tag provides an autocomplete feature on the form
					element. It facilitates users to choose the predefined options to the
					users to select data.
				</p>
			</div>
		),
		example: [
			{
				title: 'code',
				url: 'https://jsfiddle.net/xvyqbd8n/',
			},
		],
	},
	{
		id: 29,
		Ques: 'When are comments used in HTML?',
		Ans: (
			<div className="m0">
				<p>
					To understand the code easily, you can add code comments to your HTML
					document. These are not displayed in the browser, but they help you in
					leaving notes for yourself and other developers as to what a section
					of HTML is for. The start of the comment is denoted by &lt;!??? and the
					end is marked by ??? &gt;. Anything in the middle will be completely
					ignored, even if it contains valid HTML.
				</p>
			</div>
		),
		example: [
			{
				title: 'example',
				url: 'https://jsfiddle.net/n1ofbt2x/',
			},
		],
	},
	{
		id: 30,
		Ques: 'Does a hyperlink only apply to text?',
		Ans: (
			<div className="m0">
				<p>
					No, hyperlinks can be used both on texts and images. The HTML anchor
					tag defines a hyperlink that links one page to another page. The
					???href??? attribute is the most important attribute of the HTML anchor
					tag.
				</p>
				<p>
					<b>Syntax: </b>&lt;a href = ........... &gt; Link Text &lt;/a&gt;
				</p>
			</div>
		),
		example: [],
	},
];

export const cssQuestions = [
	{
		id: 1,
		Ques: 'What is Css ?',
		Ans: (
			<p className="m0">
				<p>
					CSS stands for Cascading Style Sheet. It is a popular styling language
					which is used with HTML to design websites. It can also be used with
					any XML documents including plain XML, SVG, and XUL
				</p>
			</p>
		),
		example: [
			{
				title: 'More details',
				url: 'https://www.javatpoint.com/what-is-css',
			},
		],
	},
	{
		id: 2,
		Ques: 'What is the origin of CSS?',
		Ans: (
			<p className="m0">
				<p>
					SGML (Standard Generalized Markup Language) is the origin of CSS. It
					is a language that defines markup languages.
				</p>
			</p>
		),
		example: [],
	},
	{
		id: 3,
		Ques: 'What is the Box model in CSS? Which CSS properties are a part of it?',
		Ans: (
			<p className="m0">
				<p>
					A rectangle box is wrapped around every HTML element. The box model is
					used to determine the height and width of the rectangular box. The CSS
					Box consists of Width and height (or in the absence of that, default
					values and the content inside), padding, borders, margin.
				</p>
				<ul>
					<li>
						<b>Content:</b> Actual Content of the box where the text or image
						placed.
					</li>
					<li>
						<b>Padding:</b>Area surrounding the content (Space between the
						border and content).
					</li>
					<li>
						<b>Margin:</b>Area surrounding the border.
					</li>
					<li>
						<b>Border:</b>Area surrounding the padding
					</li>
				</ul>
			</p>
		),
		example: [
			{
				title: 'View',
				url: 'https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/106/original/Box_Model_in_CSS.jpg?1615279292',
			},
		],
	},
	{
		id: 4,
		Ques: 'What are the advantages of using CSS?',
		Ans: (
			<p className="m0">
				<p>The main advantages of CSS are given below:</p>
				<ul>
					<li>
						<b>Separation of content from presentation - </b>CSS provides a way
						to present the same content in multiple presentation formats in
						mobile or desktop or laptop.
					</li>

					<li>
						<b>Easy to maintain -</b> CSS, built effectively can be used to
						change the look and feel complete by making small changes. To make a
						global change, simply change the style, and all elements in all the
						web pages will be updated automatically.
					</li>

					<li>
						<b>Bandwidth -</b> Used effectively, the style sheets will be stored
						in the browser cache and they can be used on multiple pages, without
						having to download again
					</li>
				</ul>
			</p>
		),
		example: [],
	},
	{
		id: 5,
		Ques: 'What are the limitations of CSS?',
		Ans: (
			<p className="m0">
				<p>Disadvantages of CSS are given below:</p>
				<ul>
					<li>
						<b>Browser Compatibility:</b> Some style selectors are supported and
						some are not. We have to determine which style is supported or not
						using the @support selector).
					</li>

					<li>
						<b>Cross Browser issue:</b>Some selectors behave differently in a
						different browser).
					</li>

					<li>
						<b>There is no parent selector:</b> Currently, Using CSS, you can???t
						select a parent tag.
					</li>
				</ul>
			</p>
		),
		example: [],
	},
	{
		id: 6,
		Ques: 'How to include CSS in the webpage?',
		Ans: (
			<p className="m0">
				<p>There are different ways to include a CSS in a webpage, </p>
				<ol>
					<li>
						<p>
							{' '}
							External Style Sheet: An external file linked to your HTML
							document: Using link tag, we can link the style sheet to the HTML
							page.
						</p>
						<p>
							&lt;link rel=???mystyles.css??? type=???text/css??? href= ???mystyles.css
							???/&gt;
						</p>
						{/* ??? ??? */}
					</li>

					<li>
						Embed CSS with a style tag: A set of CSS styles included within your
						HTML page.
						<p>
							&lt;style type=???text/css???&gt; /*Add style rules here*/
							&lt;/style&gt;
							<br />
							<br />
							Add your CSS rules between the opening and closing style tags and
							write your CSS exactly the same way as you do in stand-alone
							stylesheet files.
						</p>
					</li>

					<li>
						Add inline styles to HTML elements(CSS rules applied directly within
						an HTML tag.): Style can be added directly to the HTML element using
						a style tag.
						<p>
							&lt;h2 style=???color:red;background:black ???&gt;Inline
							Style&lt;/h2&gt;
						</p>
					</li>
					<li>
						Import a stylesheet file (An external file imported into another CSS
						file): Another way to add CSS is by using the @import rule. This is
						to add a new CSS file within CSS itself.
						<p>@import ???path/to/style.css???;</p>
					</li>
				</ol>
			</p>
		),
		example: [],
	},
	{
		id: 7,
		Ques: 'What is VH/VW (viewport height/ viewport width) in CSS?',
		Ans: (
			<p className="m0">
				<p>
					It???s a CSS unit used to measure the height and width in percentage
					with respect to the viewport. It is used mainly in responsive design
					techniques. The measure VH is equal to 1/100 of the height of the
					viewport. If the height of the browser is 1000px, 1vh is equal to
					10px. Similarly, if the width is 1000px, then 1 vw is equal to 10px.
				</p>
			</p>
		),
		example: [],
	},
	{
		id: 8,
		Ques: 'Difference between reset vs normalize CSS?. How do they differ?',
		Ans: (
			<p className="m0">
				<p>
					Reset CSS: CSS resets aim to remove all built-in browser styling. For
					example margins, paddings, font-sizes of all elements are reset to be
					the same.
					<br />
					Normalize CSS: Normalize CSS aims to make built-in browser styling
					consistent across browsers. It also corrects bugs for common browser
					dependencies
				</p>
			</p>
		),
		example: [],
	},
	{
		id: 9,
		Ques: 'What is the difference between inline, inline-block, and block?',
		Ans: (
			<p className="m0">
				<ul>
					<li>
						<b> Block Element:</b> The block elements always start on a new
						line. They will also take space for an entire row or width. List of
						block elements are &lt;div&gt;,&lt;p&gt;.
					</li>

					<li>
						<b>Inline Elements: </b>Inline elements don`t start on a new line,
						they appear on the same line as the content and tags beside them.
						Some examples of inline elements are &lt;a&gt;, &lt;span&gt;,
						&lt;strong&gt;., and &lt;img&gt; tags.
					</li>

					<li>
						<b>Inline Block Elements:</b> Inline-block elements are similar to
						inline elements, except they can have padding and margins added on
						all four sides.
					</li>
				</ul>
			</p>
		),
		example: [],
	},
	{
		id: 10,
		Ques: 'How do you test the webpage in different browsers?',
		Ans: (
			<p className="m0">
				<p>
					It???s most important to test a website in different browsers when
					you???re first designing it, or when making major changes. However, it???s
					also important to repeat these tests periodically, since browsers go
					through a lot of updates and changes.
				</p>
			</p>
		),
		example: [],
	},
	{
		id: 11,
		Ques: 'How do you specify units in the CSS?. What are the different ways to do it?',
		Ans: (
			<p className="m0">
				<p>
					There are different ways to specify units in CSS like px, em, pt,
					percentage (%). px(Pixel) gives fine-grained control and maintains
					alignment because 1 px or multiple of 1 px is guaranteed to look
					sharp. px is not cascade. em maintains relative size. you can have
					responsive fonts. Em, will cascade 1em is equal to the current
					font-size of the element or the browser default. If u sent font-size
					to 16px then 1em = 16px. The common practice is to set default body
					font-size to 62.5% (equal to 10px).
					<br />
					<br />
					pt(point) are traditionally used in print. 1pt = 1/72 inch and it is a
					fixed-size unit.
					<br />
					<br />
					%(percentage) sets font-size relative to the font size of the body.
					Hence, you have to set the font-size of the body to a reasonable size
				</p>
			</p>
		),
		example: [],
	},
	{
		id: 12,
		Ques: 'Does margin-top or margin-bottom have an effect on inline elements?',
		Ans: (
			<p className="m0">
				<p>
					No, it doesn???t affect the inline elements. Inline elements flow with
					the contents of the page.
				</p>
			</p>
		),
		example: [],
	},
	{
		id: 13,
		Ques: 'Explain CSS position property?',
		Ans: (
			<p className="m0">
				<ul>
					<li>
						<b>Absolute</b> <br />
						To place an element exactly where you want to place it. absolute
						position is actually set relative to the element`s parent. if no
						parent is available then the relative place to the page itself (it
						will default all the way back up to the element).
					</li>

					<li>
						<b>Relative</b> <br />
						`Relative to itself`. Setting position: relative; on an element and
						no other positioning attributes, it will no effect on its
						positioning. It allows the use of z-index on the element and it
						limits the scope of absolutely positioned child elements. Any child
						element will be absolutely positioned within that block.
					</li>
					<li>
						<b>Fixed</b> <br />
						The element is positioned relative to the viewport or the browser
						window itself. viewport doesn`t change if you scroll and hence the
						fixed element will stay right in the same position.
					</li>
					<li>
						<b>Static</b> <br />
						Static default for every single page element. The only reason you
						would ever set an element to position: static is to
						forcefully-remove some positioning that got applied to an element
						outside of your control.
					</li>
					<li>
						<b>Sticky</b> <br />
						Sticky positioning is a hybrid of relative and fixed positioning.
						The element is treated as relative positioned until it crosses a
						specified threshold, at which point it is treated as fixed
						positioned.
					</li>
				</ul>
			</p>
		),
		example: [
			{
				title: 'Image View',
				url: 'https://s3.ap-south-1.amazonaws.com/myinterviewtrainer-domestic/public_assets/assets/000/000/107/original/CSS_Position_Property.jpg?1615286481',
			},
		],
	},
	{
		id: 14,
		Ques: 'What does DOM reflow occur?',
		Ans: (
			<p className="m0">
				<p>
					Reflow is the name of the web browser process for re-calculating the
					positions and geometries of elements in the document, for the purpose
					of re-rendering part or all of the document.{' '}
				</p>
				<ul>
					<li>Insert, remove or update an element in the DOM.</li>

					<li>Modify content on the page, e.g. the text in an input box.</li>

					<li>Move a DOM element.</li>
					<li>Animate a DOM element.</li>
					<li>
						Take measurements of an element such as offsetHeight or
						getComputedStyle
					</li>
					<li>Change a CSS style.</li>
				</ul>
			</p>
		),
		example: [],
	},
	{
		id: 15,
		Ques: 'Different Box Sizing Property?',
		Ans: (
			<p className="m0">
				<p>
					The box-sizing CSS property sets how the total width and height of an
					element are calculated.
				</p>
				<ul>
					<li>
						<b>Content-box:</b> The default width and height values apply to the
						element`s content only. The padding and border are added to the
						outside of the box.
					</li>

					<li>
						<b>Padding-box:</b> Width and height values apply to the element`s
						content and its padding. The border is added to the outside of the
						box. Currently, only Firefox supports the padding-box value
					</li>

					<li>
						<b>Border-box:</b> Width and height values apply to the content,
						padding, and border.
					</li>
				</ul>
			</p>
		),
		example: [],
	},
	{
		id: 16,
		Ques: 'What is CSS Flexbox?',
		Ans: (
			<p className="m0">
				<p>
					CSS3 Flexible boxes also known as CSS Flexbox is a new layout mode in
					CSS3.
					<br />
					<br />
					The CSS3 flexbox is used to make the elements behave predictably when
					they are used with different screen sizes and different display
					devices. It provides a more efficient way to layout, align and
					distribute space among items in the container.
					<br />
					<br />
					It is mainly used to make CSS3 capable to change its item???s width and
					height to best fit all available spaces. It is preferred over the
					block model.
					<br />
					<br />
					The CSS3 flexbox contains flex containers and flex items.
				</p>
			</p>
		),
		example: [],
	},
	{
		id: 17,
		Ques: 'Have you used Flexbox & CSS Grid before? What are the differences between them?',
		Ans: (
			<p className="m0">
				<p>
					Recently we???ve seen the rise of Flexbox and even more recently, CSS
					Grid. While these aren???t well supported in older browsers, support for
					them in newer browsers is continuously growing, and now is the time to
					look into them and see if you can start using them. Make sure you
					check browser support!.
				</p>
				<p>
					<b>Flexbox</b> is a very useful layout tool, especially for smaller
					areas within the site. Its main features are to align items in
					horizontal or vertical axes, space them out automatically, invert the
					order in which they???re displayed, along with a few other layout
					options.
					<br />
					<br />
					<b>CSS Grid </b> is more of a layout tool for the entire page. While
					Flexbox excels in laying out items along a single axis, Grid is better
					for layouts with both horizontal and vertical axes, i.e. grids!
				</p>
			</p>
		),
		example: [],
	},
	{
		id: 18,
		Ques: 'To use flexbox we define a container as a flexbox. What is the CSS to do this?',
		Ans: <p className="m0">Display:flex;</p>,
		example: [],
	},
	{
		id: 19,
		Ques: 'Flex-direction allows you to do what?',
		Ans: (
			<p className="m0">
				Define the direction of how elements are positioned based on either row
				or column
			</p>
		),
		example: [],
	},
	{
		id: 20,
		Ques: 'Flex-wrap allows you to do what?',
		Ans: (
			<p className="m0">
				Define how elements will wrap when the browser width is changed
			</p>
		),
		example: [],
	},
	{
		id: 21,
		Ques: 'How to create container using flex? give example.',
		Ans: (
			<p className="m0">
				To define and access a container as a flex container you can use
				display: flex;. If no additional rules are set, all direct children will
				be considered flex items and will be laid horizontally, from left to
				right. The width of flex items automatically adjusts to fit inside the
				container.
			</p>
		),
		example: [
			{
				title: 'Code',
				url: 'https://jsfiddle.net/j4gohpyk/',
			},
		],
	},
	{
		id: 22,
		Ques: 'How to wrap the box inside the flexbox container?',
		Ans: <p className="m0">using ???flex-wrap: wrap???</p>,
		example: [],
	},
	{
		id: 23,
		Ques: 'What are the different types of Selectors in CSS?',
		Ans: (
			<p className="m0">
				<p>
					A CSS selector is the part of a CSS ruleset that actually selects the
					content you want to style. Different types of selectors are listed
					below.
					<br />
					<b>Element Type Selector:</b> This selector matches one or more HTML
					elements of the same name. In the given example, the provided styles
					will get applied to all the ul elements on the page.
					<br />
					<br />
					<b>ID Selector:</b> This selector matches any HTML element that has an
					ID attribute with the same value as that of the selector. In the given
					example, the provided styles will get applied to all the elements
					having ID as a container on the page.
					<br />
					<br />
					<b>Class Selector:</b>The class selector also matches all elements on
					the page that have their class attribute set to the same value as the
					class. In the given example, the provided styles will get applied to
					all the elements having ID as the box on the page.
					<br />
					<br />
					<b>Descendant Combinator:</b> The descendant selector or, more
					accurately, the descendant combinator lets you combine two or more
					selectors so you can be more specific in your selection method. This
					declaration block will apply to all elements that have a class of box
					that is inside an element with an ID of the container. It???s worth
					noting that the .box element doesn???t have to be an immediate child:
					there could be another element wrapping .box, and the styles would
					still apply.
					<br />
					<br />
					<b>Child Combinator:</b> A selector that uses the child combinator is
					similar to a selector that uses a descendant combinator, except it
					only targets immediate child elements.
					<br />
					The selector will match all elements that have a class of box and that
					are immediate children of the #container element. That means, unlike
					the descendant combinator, there can???t be another element wrapping
					.box it has to be a direct child element.
					<br />
					<br />
					<b>General Sibling Combinator:</b> A selector that uses a general
					sibling combinator to match elements based on sibling relationships.
					The selected elements are beside each other in the HTML.
					<br />
					<br />
					<b>Adjacent Sibling Combinator:</b> A selector that uses the adjacent
					sibling combinator uses the plus symbol (+), and is almost the same as
					the general sibling selector. The difference is that the targeted
					element must be an immediate sibling, not just a general sibling.
					<br />
					<br />
					<b> Attribute Selector:</b> The attribute selector targets elements
					based on the presence and/or value of HTML attributes, and is declared
					using square brackets.
				</p>
			</p>
		),
		example: [
			{
				title: 'Detail in Code',
				url: 'https://jsfiddle.net/zkvhoyfq/5/',
			},
		],
	},
	{
		id: 24,
		Ques: 'What are web safe fonts and fallback fonts?',
		Ans: (
			<p className="m0">
				Not all operating systems and browsers have the same fonts installed.
				Web safe fonts are fonts that are commonly pre-installed on many
				computer systems, such as Arial and Times New Roman. In case the browser
				or operating system doesn???t recognize the first font you set (e.g.
				Ubuntu), you should choose a web safe fallback font to display (e.g.
				Arial), followed by a generic font family (e.g. sans-serif). If your
				fallback font doesn???t display either, the browser can pick a generic
				font in the sans-serif family.
			</p>
		),
		example: [],
	},
	{
		id: 25,
		Ques: 'How would you use media queries in a mobile-first approach?',
		Ans: (
			<p className="m0">
				There???s no way to avoid these nowadays, everyone expects their website
				to work on mobile devices, even if they don???t specifically ask for it.
				<br />
				<br />
				The most common approach is the mobile-first one. All styles outside of
				media queries are targeted at mobile devices. Then, through
				progressively larger media queries, you can style larger screens one
				step at a time.
			</p>
		),
		example: [
			{
				title: 'Code',
				url: 'https://jsfiddle.net/3xn5zo7c/',
			},
		],
	},
	{
		id: 26,
		Ques: 'How do you handle browser differences in your user base?',
		Ans: (
			<p className="m0">
				In the past few years, browsers have come a long way. Modern browsers
				update automatically and provide pretty good feature coverage. There are
				still differences between browsers, and while some support certain
				features (like certain CSS styles), others don???t or display them
				differently.
				<br />
				<br />
				Your biggest concern is legacy browsers. You may have seen jokes about
				Internet Explorer, and while the newer versions aren???t as bad, there are
				still a lot of people using older versions. These days it???s not uncommon
				to still support IE9, sometimes even IE8.
				<br />
				<br />
				This can severely limit the kind of styles you can use, though most can
				be approximated using fallback styles. The @supports query in CSS can be
				very useful to scan if the user???s current browser has a certain feature.
				If they do, you can apply those styles without worry. If not, you can
				have some fallback styles as a backup.
				<br />
				<br />
			</p>
		),
		example: [],
	},
	{
		id: 27,
		Ques: 'Do you use any tools for browser support?',
		Ans: (
			<p className="m0">
				One of my favourite online tools is caniuse.com. It???s a website that
				tells you exactly which browsers support which features, including CSS
				and JavaScript, which can be extremely helpful in finding out what you
				can and can???t use!
			</p>
		),
		example: [],
	},
	{
		id: 28,
		Ques: 'Describe pseudo-elements and discuss what they are used for.',
		Ans: (
			<p className="m0">
				A CSS pseudo-element is a keyword added to a selector that lets you
				style a specific part of the selected element(s). They can be used for
				decoration (:first-line, :first-letter) or adding elements to the markup
				(combined with content: ...) without having to modify the markup
				(:before, :after).
			</p>
		),
		example: [],
	},
	{
		id: 29,
		Ques: 'How is responsive design different from adaptive design?',
		Ans: (
			<p className="m0">
				Both responsive and adaptive design attempt to optimize the user
				experience across different devices, adjusting for different viewport
				sizes, resolutions, usage contexts, control mechanisms, and so on.
				<br />
				<br />
				<b>Responsive design</b> works on the principle of flexibility?????????a
				single fluid website that can look good on any device. Responsive
				websites use media queries, flexible grids, and responsive images to
				create a user experience that flexes and changes based on a multitude of
				factors. Like a single ball growing or shrinking to fit through several
				different hoops.
				<br />
				<br />
				<b>Adaptive design</b> is more like the modern definition of progressive
				enhancement. Instead of one flexible design, adaptive design detects the
				device and other features, and then provides the appropriate feature and
				layout based on a predefined set of viewport sizes and other
				characteristics. The site detects the type of device used, and delivers
				the pre-set layout for that device. Instead of a single ball going
				through several different-sized hoops, you???d have several different
				balls to use depending on the hoop size.
				<br />
				<br />
			</p>
		),
		example: [],
	},
	{
		id: 30,
		Ques: 'What does Accessibility (a11y) mean?',
		Ans: (
			<p className="m0">
				<b>Accessibility </b>(a11y) is a measure of a computer system`s
				accessibility is to all people, including those with disabilities or
				impairments. It concerns both software and hardware and how they are
				configured in order to enable a disabled or impaired person to use that
				computer system successfully.
			</p>
		),
		example: [],
	},
];
export const javascriptContent = [
	{
		id: 1,
		heading: 'CSS Grid',
		title: 'var, let, const',
		subheader: 'September 14, 2016',
		actionButton: {
			github: {
				title: 'Github link',
				url: '',
			},
			blog: {
				title: 'Blog',
				url: 'https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/',
			},
			code: {
				title: 'Start Coding',
				url: '',
			},
		},
		para: (
			<div>
				<p>
					1. var - redeclared and reinitialized
					<br />
					Ex - 1. var greeter = &quot;hey hi&quot;;
					<br />
					var greeter = &quot;say Hello instead&quot;;
					<br />
					2. var greeter = &quot;hey hi&quot;;
					<br />
					greeter = &quot;say Hello instead&quot;;
				</p>

				<p>
					{' '}
					2. let - Not redeclared but initialized
					<br />
					Ex - 1. let greeter = &quot;hey hi&quot;;
					<br />
					let greeter = &quot;say Hello instead&quot;; // error
					<br />
					2. let greeter = &quot;hey hi&quot;;
					<br />
					greeter = &quot;say Hello instead&quot;;
				</p>

				<p>
					3. const - Not redeclared and not re-initialized
					<br />
					Ex - 1. const greeter = &quot;hey hi&quot;;
					<br />
					const greeter = &quot;say Hello instead&quot;;
					<br />
					2. const greeter = &quot;hey hi&quot;;
					<br />
					greeter = &quot;say Hello instead&quot;;
				</p>
			</div>
		),
	},
	{
		id: 2,
		title: 'Javascript Scope',
		subheader: 'September 14, 2016',
		para: (
			<div>
				<p>
					What is scope ?<br />
					Scope determines the accessibility (visibility) of variables.
				</p>

				<p>
					how many of scope?
					<br />
					JavaScript has 3 types of scope:
				</p>

				<p>
					Block scope
					<br />
					Function scope
					<br />
					Global scope
				</p>

				<p>
					Note - Variables declared inside a {} block cannot be accessed from
					outside the block:
				</p>

				<p>
					Note - Variables declared with var, let and const are quite similar
					when declared outside a block.
					<br />
				</p>
			</div>
		),
		actionButton: {
			github: {
				title: 'Github link',
				url: '',
			},
			blog: {
				title: 'Blog',
				url: 'https://scotch.io/tutorials/understanding-scope-in-javascript',
			},
			code: {
				title: 'Start Coding',
				url: '',
			},
		},
	},
];

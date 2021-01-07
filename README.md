# Welcome to my portfolio repository!

## About

This website was initially just 2 files: an html file and a javascript file. I used [Bulma](https://bulma.io/) to style the webpage because I wasn't comfortable with CSS and wanted to focus less on styling the website from scratch, and Bulma is more minimal compared to bootstrap which I found to be more appealing. However, after I worked on the [amazon-clone website](https://github.com/NPVallejos/amazon-clone) I became a lot more confident using CSS (I also gained a better understanding of React). I then converted this project to a React project using create-react-app and used vanilla CSS to style everything. I tried to follow the [BEM naming convention](http://getbem.com/naming/) for CSS classes to ensure consistency across all CSS code. I also used [flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox) and found [this website extremely helpful as a reference](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). Whenever I needed to lookup anything related to JavaScript I found the [MDN Web Docs for JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) to be the best resource. And of course, for React I used their website to understand things like [function components](https://reactjs.org/docs/components-and-props.html) and how to use [state hooks](https://reactjs.org/docs/hooks-state.html), which allow you to use state variables inside function components.

## Focusing on responsive design first

One of my main objectives for this website was to make it accessible across all devices (desktop and mobile). So to ensure that this website was responsive, I used flexbox to layout the html elements and used percentages for width and height. I also used [media querys](https://www.w3schools.com/css/css_rwd_mediaqueries.asp) to change the flex-direction of certain elements from row to column ensure that all html elements would fit as the browsers width shrunk (this only applies to desktop). Also, this line of html code ensures that the webpage content scales according to the current devices width:

```
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

## Debugging

The best way to understand whats going on with your CSS code is to use the inspector tool in your browser. I found that editing CSS in the browser really helped me understand what was going on. For example, by 'unchecking' CSS attributes I could then see the immediate effect on the website, so on the About section I was able to figure out that the background image needed to have a fixed position instead of an absolute position to get a parallax effect. Also, to ensure that a website looks good on mobile devices you can toggle mobile view in the inspector; however, after looking this up online, I found that this was not always a reliable tool to see how it appears on a mobile device. So I went a step further and connected to my website from my phone's browser by typing in my ip4 address (open cmd and type 'ipconfig' to see list of ip4 addresses) and a port number of 3000.

## The contact form

At the bottom of the page I included a contact form where you can enter your name, email address, phone number, and a short message. All of this will be sent to my main email nvallejos123@gmail.com. The reason you are able to do this (sending an email on client-side) is because I use an email service called [Email.js](https://www.emailjs.com/). My reasoning for using this instead of implementing a small server myself and writing some backend code to send an email was because it seemed simple to use and I wouldn't have to write backend code for one task on my website and have a server running at all times. Plus, Email.js is free and has a monthly quota of 200 emails, which I think is more than enough. It can be glitchy sometimes in the sense that it won't send the email (its rare but it happens), so just to make sure that your message goes through a new tab is opened up to gmail with your message and you can customize and send the email manually.

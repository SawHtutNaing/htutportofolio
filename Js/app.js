
// hamburger
let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.navbar');
let bod = document.querySelector('.container');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');

});



// navonscroll
window.onscroll = function () {
    const docScrollTop = document.documentElement.scrollTop;
    // console.log(docScrollTop)
    if (window.innerWidth > 991) {
      if (docScrollTop > 100) {
        document.querySelector("header").classList.add("fixed");
        // console.log("have been added")
      } else {
        document.querySelector("header").classList.remove("fixed");
        // console.log("have been removed")

      }
    }
  }

  //navbar links

const navbar = document.querySelector(".navbar");
a = navbar.querySelectorAll("a")

a.forEach(function (element) {
  element.addEventListener("click", function () {
    for (let i = 0; i < a.length; i++) {
      a[i].classList.remove("active")
    }
    this.classList.add("active");
    // document.querySelector(".navbar").classList.toggle("show");
  })
})


// screenheight

if(screen.width >768){
  $("#bgchange").addClass("bgirreglar");
}else if(screen.width <= 768){
  $("#bgchange1").addClass("bgirreglar");
}

// showhide
$(".check").click(function(){
   $(".showhide").addClass("absolute")
})


// circualr progressbar
$(".circle_percent").each(function() {
  var $this = $(this),
  $dataV = $this.data("percent"),
  $dataDeg = $dataV * 3.6,
  $round = $this.find(".round_per");
$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");	
$this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
$this.prop('Counter', 0).animate({Counter: $dataV},
{
  duration: 2000, 
  easing: 'swing', 
  step: function (now) {
          $this.find(".percent_text").text(Math.ceil(now)+"%");
      }
  });
if($dataV >= 51){
  $round.css("transform", "rotate(" + 360 + "deg)");
  setTimeout(function(){
    $this.addClass("percent_more");
  },1000);
  setTimeout(function(){
    $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
  },1000);
} 
});


// animated text
const allElements = document.querySelectorAll('.animated-text');
console.log(allElements.length)
// It checks if there is at least one element
if (allElements.length > 0) {
	//It runs the script for each found element
	allElements.forEach((element) => {
	
		const txtElement = element,
			wordsList = txtElement.getAttribute('data-words'),
			words = wordsList.split(', '); // It makes an array of words from data attribute

		let wordsCount = 0;

		entry();

		// Initial function
		function entry() {
			if (wordsCount < words.length) {
				// It runs the code for each word
				let word = words[wordsCount],
					txtArr = word.split(''), // It makes an array of letters in the word
					count = 0;

				txtElement.textContent = ''; 
				// It removes the previous text from the element

				// For each letter in the array
				txtArr.forEach((letter) => {
					// It replaces the empty space for the "non-break-space" HTML...
					// ... This is needed to separate the words properly
					
					let _letter = letter === ' ' ? '&nbsp;' : letter;
					console.log(_letter)

					// It wraps every letter with a "span" and puts all they back to the element
					txtElement.innerHTML += `<span>${_letter}</span>`;
				});

				let spans = txtElement.childNodes;
				console.log(spans)

				// It sets the interval between each letter showing
				const letterInterval = setInterval(activeLetter, 70);

				function activeLetter() {
					spans[count].classList.add('active');
					count++;

					if (count === spans.length) {
						clearInterval(letterInterval);

						// It waits 4 seconds to start erasing the word
						setTimeout(() => {
							eraseText();
						}, 600);
					}
				}

				function eraseText() {
					// It sets the interval between each letter hiding
					let removeInterval = setInterval(removeLetter, 40);
					count--;

					function removeLetter() {
						spans[count].classList.remove('active');
						count--;

						if (count === -1) {
							clearInterval(removeInterval);
							wordsCount++;

							// After removing the last letter, call the initial function again
							entry();
						}
					}
				}
			} else {
				// If the code reaches the last word
				// It resets the words counter...
				wordsCount = 0;
				// ...and calls the initial function again.
				entry();
			}
		}
	});
}




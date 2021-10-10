import React,{useState} from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const Faq = () => {
    const[toggle,setToggle] = useState(0);
    return (
        <>
        <Navbar/>
        <div className="container">
			<div className="row mb50">
				<div className="col-md-12">
					<div className="section-title text-center wow zoomIn">
						<h1>Frequently Asked Questions</h1>
						<span></span>
						<p>Our Frequently Asked Questions here.</p>
					</div>
				</div>
			</div>
			<div className="row">				
				<div className="col-md-12">
					<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
						<div className="panel panel-default">
							<div className="panel-heading" role="tab" id="headingOne">
								<h4 className="panel-title">
									{/* 0 index */}
                                <a href= "/" className={toggle === 0 ? "" : "collapsed"} onClick={(e)=>{e.preventDefault();setToggle(0)}}>
								Read the Directions Carefully
									</a>
								</h4>
							</div>
							<div id="collapseOne" className={toggle === 0 ? "panel-collapse collapse in" : "panel-collapse collapse" } role="tabpanel" aria-labelledby="headingOne">
								<div className="panel-body">
									<p>Your instructors usually outline their expectations for forum and discussion board posts in the syllabus. Make sure to read their rules for posting. Some instructors may have specific word
count expectations, or require certain things. Every instructor and every course is different, so
make sure you understand what you’re supposed to be writing in your discussion post. </p>
								</div>
							</div>
						</div>
						<div className="panel panel-default">
							<div className="panel-heading" role="tab" id="headingTwo">
								<h4 className="panel-title">
									{/* index 1 */}
									<a href= "/" className={toggle === 1 ? "" : "collapsed"} onClick={(e)=>{e.preventDefault();setToggle(1)}}>
									Don’t Be Afraid to Ask Questions
									</a>
								</h4>
							</div>
							<div id="collapseTwo" className={toggle === 1 ? "panel-collapse collapse in" : "panel-collapse collapse" } role="tabpanel" aria-labelledby="headingTwo">
								<div className="panel-body">
									<p>You can always email your instructor to ask for more details about discussion board
									assignments. It may feel intimidating, but reaching out is the best thing to do if you’re unsure of
										how to respond to a topic question or instructor-led discussion. Your instructor is there to help
									you grow</p>
								</div>
							</div>
						</div>
						<div className="panel panel-default">
							<div className="panel-heading" role="tab" id="headingThree">
								<h4 className="panel-title">
									{/* index 2 */}
                                <a href= "/" className={toggle === 2 ? "" : "collapsed"} onClick={(e)=>{e.preventDefault();setToggle(2)}}>
								Actually Say Something
									</a>
								</h4>
							</div>
							<div id="collapseThree" className={toggle === 2 ? "panel-collapse collapse in" : "panel-collapse collapse" } role="tabpanel" aria-labelledby="headingThree">
								<div className="panel-body">
									<p>To get the most out of your online discussion board posts, you need to actually have a
conversation. When you’re posting, think about what you’re saying: why do you think this way?
Using sources like your textbooks or even a journal article can boost your credibility and
increase the points you earn for your posts.  </p>
								</div>
							</div>
						</div>
						<div className="panel panel-default">
							<div className="panel-heading" role="tab" id="headingFour">
								<h4 className="panel-title">
                                <a href= "/" className={toggle === 3 ? "" : "collapsed"} onClick={(e)=>{e.preventDefault();setToggle(3)}}>
								Don’t Procrastinate
									</a>
								</h4>
							</div>
							<div id="collapseFour" className={toggle === 3 ? "panel-collapse collapse in" : "panel-collapse collapse" } role="tabpanel" aria-labelledby="headingFour">
								<div className="panel-body">
									<p>Be sure to post your discussion thread well before the deadline. If you post at the last minute,
you’re not likely to get thoughtful and enlightening responses, and you’re not making the most of
your online experience. </p>
								</div>
							</div>
						</div>
						<div className="panel panel-default">
							<div className="panel-heading" role="tab" id="headingFive">
								<h4 className="panel-title">
                                <a href= "/" className={toggle === 4 ? "" : "collapsed"} onClick={(e)=>{e.preventDefault();setToggle(4)}}>
								Review and Proofread Your Post
									</a>
								</h4>
							</div>
							<div id="collapseFive" className={toggle === 4 ? "panel-collapse collapse in" : "panel-collapse collapse" } role="tabpanel" aria-labelledby="headingFive">
								<div className="panel-body">
									<p>Before hitting “submit” or “create thread,” read over your post at least once. Make sure you’re
not going off subject and look for any spelling or grammar mistakes.</p><p>
One important difference between in-person class discussions and online discussion boards is the
lack of context. In person, you can use body language to determine how someone feels about
what they’re saying. When writing online, it can be difficult to understand the tone your writing
gives off to your readers.</p><p>
Try using empathy - read your post as if you were a classmate or friend and consider how they
might respond if this was a post they read.</p><p>
Avoid all-caps (IT LOOKS LIKE YELLING), “text speak” and slang terms (LOL, omg, on
fleek), and use typical punctuation (not multiple exclamation points or emoticons). As always,
never use racial or ethnic slurs, aggressive language, profanity, or language that could be
offensive to other cultures or religions. </p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>		
		</div>
<Footer />
</>
    )
}

export default Faq

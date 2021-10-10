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
                                <a href= "/" className={toggle === 0 ? "" : "collapsed"} onClick={(e)=>{e.preventDefault();setToggle(0)}}>
										Why you choose Titanic? 
									</a>
								</h4>
							</div>
							<div id="collapseOne" className={toggle === 0 ? "panel-collapse collapse in" : "panel-collapse collapse" } role="tabpanel" aria-labelledby="headingOne">
								<div className="panel-body">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
								</div>
							</div>
						</div>
						<div className="panel panel-default">
							<div className="panel-heading" role="tab" id="headingTwo">
								<h4 className="panel-title">
									<a href= "/" className={toggle === 1 ? "" : "collapsed"} onClick={(e)=>{e.preventDefault();setToggle(1)}}>
										Why Titanic best? 
									</a>
								</h4>
							</div>
							<div id="collapseTwo" className={toggle === 1 ? "panel-collapse collapse in" : "panel-collapse collapse" } role="tabpanel" aria-labelledby="headingTwo">
								<div className="panel-body">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
								</div>
							</div>
						</div>
						<div className="panel panel-default">
							<div className="panel-heading" role="tab" id="headingThree">
								<h4 className="panel-title">
                                <a href= "/" className={toggle === 2 ? "" : "collapsed"} onClick={(e)=>{e.preventDefault();setToggle(2)}}>
										How to apply Titanic jobs? 
									</a>
								</h4>
							</div>
							<div id="collapseThree" className={toggle === 2 ? "panel-collapse collapse in" : "panel-collapse collapse" } role="tabpanel" aria-labelledby="headingThree">
								<div className="panel-body">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
								</div>
							</div>
						</div>
						<div className="panel panel-default">
							<div className="panel-heading" role="tab" id="headingFour">
								<h4 className="panel-title">
                                <a href= "/" className={toggle === 3 ? "" : "collapsed"} onClick={(e)=>{e.preventDefault();setToggle(3)}}>
										How experts Titanic team member? 
									</a>
								</h4>
							</div>
							<div id="collapseFour" className={toggle === 3 ? "panel-collapse collapse in" : "panel-collapse collapse" } role="tabpanel" aria-labelledby="headingFour">
								<div className="panel-body">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
								</div>
							</div>
						</div>
						<div className="panel panel-default">
							<div className="panel-heading" role="tab" id="headingFive">
								<h4 className="panel-title">
                                <a href= "/" className={toggle === 4 ? "" : "collapsed"} onClick={(e)=>{e.preventDefault();setToggle(4)}}>
										How Titanic give customer support? 
									</a>
								</h4>
							</div>
							<div id="collapseFive" className={toggle === 4 ? "panel-collapse collapse in" : "panel-collapse collapse" } role="tabpanel" aria-labelledby="headingFive">
								<div className="panel-body">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl lorem, dictum id pellentesque at, vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
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

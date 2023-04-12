import React, {Component} from 'react'
import lottie from 'lottie-web'
import $ from 'jquery'

class PreLoader extends Component {

    componentDidMount(){
        var element = document.getElementById('pre-loader-container')
        //var element = document.getElementById('myForm')
        //console.log(element)

        lottie.loadAnimation({
            container: element, // the dom element that will contain the animation
            renderer: 'svg',
            loop: false,
            autoplay: true,
            animationData: require('../../resources/preloader/data.json'),
            //path: require('../../resources/preloader/data.json')
            // path: 'https://api.myjson.com/bins/85kh4'// the path to the animation json
            //path: 'https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json' // the path to the animation json
        });

        //make html overflow hidden
        var html = $('html')
        html.css('overflow','hidden')
        
        var main = $('main')
        var footer = $('footer')
     
        setTimeout( () => {
        //fade out pre loader container
        var target = $('#pre-loader-container')
        target.fadeOut('fast')
        //remove element from DOM after fade out
        setTimeout( () =>{
            main.css('display','block')
            footer.css('display','flex')
            main.fadeIn('slow')
            footer.fadeIn('slow')
            target.remove()
            var html = $('html')
            html.css('overflow','auto')
            },200) 
        }, 2500)
        
    
  




    }




    render(){
        
        return(
            <div id="pre-loader-container">
            
            </div>
        );
    }
}
export default PreLoader;
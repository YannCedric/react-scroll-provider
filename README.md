# React Scroll Provider

React component that allows scroll height detection.

## Install and usage


1. `npm install react-scroll-provider`

2. Example usage 
   
``` jsx
import {Provider} from 'react-scroll-provider'

...
    scrollHandler(height){

    }

    render(){
        return (
            <Provider onScroll={this.scrollHandler.bind(this)}>
                <div>
                    
                    ...

                </div>
            </Provider> 
        )
    }

...
```

3. More to come, feel free to contribute on [Github](https://github.com/YannCedric/react-scroll-provider)

# Props
* **onScroll** - function - a function executed when scrolling happens. Function provides a value from 0 to 1 (top to bottom) of scroll height.  
* **component** - OBJECT - dom object to attach the scroll provider to. **(TODO)**
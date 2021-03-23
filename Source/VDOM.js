/*
    opt = {
        Type: 'div',            // Tag name of new element, lowercase is recommended
        Props: {                // Optional, properties of new element
            innerHTML: 'Text',
            style: {
                color: '#F00'
            }
        },
        Children: [
            {             // Optional, child nodes of new element
                Type: 'span'
            }
        ]
    }
*/

var VDOM = function (opt) {
    var VNODE = document.createElement(opt.Type);
    if (opt.Props)
        VNODE.Attr(opt.Props);
    if (opt.Children)
        for (var i = 0; i < opt.Children.length; i++)
            VNODE.appendChild(VDOM(opt.Children[i]));
    return VNODE;
};

export default VDOM;
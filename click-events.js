(function() {
    'use strict';
    function getTimestamp() {
        const now = new Date();
        return now.toISOString();
    }

    function getEventObjectType(element) {
        if (!element) return 'unknown';
        
        const tag = element.tagName ? element.tagName.toLowerCase() : '';

        const typeMap = {
            'button': 'button',
            'a': 'link',
            'img': 'image',
            'input': element.type || 'input',
            'textarea': 'textarea',
            'select': 'drop_down',
            'video': 'video',
            'audio': 'audio',
            'canvas': 'canvas',
            'svg': 'svg',
            'form': 'form',
            'table': 'table',
            'div': 'div',
            'span': 'span',
            'p': 'text',
            'h1': 'heading',
            'h2': 'heading',
            'h3': 'heading',
            'h4': 'heading',
            'h5': 'heading',
            'h6': 'heading',
            'ul': 'list',
            'ol': 'list',
            'li': 'list_item',
            'nav': 'navigation',
            'header': 'header',
            'footer': 'footer',
            'section': 'section',
            'article': 'article',
            'label': 'label',
            'td': 'table_cell',
            'th': 'table_header',
            'tr': 'table_row'
        };
        
        return typeMap[tag] || tag || 'unknown';
    }
    
    function getCSSObjectType(element) {
        if (!element) return 'unknown';
        
        try {
            const computed = window.getComputedStyle(element);
            const display = computed.display;
            const position = computed.position;

            if (display === 'none') return 'hidden';
            if (position === 'fixed') return 'fixed';
            if (position === 'absolute') return 'absolute';
            if (display === 'flex') return 'flex';
            if (display === 'grid') return 'grid';
            if (display === 'inline') return 'inline';
            if (display === 'inline-block') return 'inline_block';
            if (display === 'block') return 'block';
            
            return display;
        } catch (e) {
            return 'unknown';
        }
    }
    

    function getElementIdentifier(element) {
        if (!element) return '';
        
        if (element.id) {
            return `#${element.id}`;
        }
        
        if (element.className && typeof element.className === 'string') {
            const classes = element.className.split(' ').filter(c => c);
            if (classes.length > 0) {
                return `.${classes[0]}`;
            }
        }
        
        return element.tagName ? element.tagName.toLowerCase() : '';
    }

    function printEvent(timestamp, eventType, eventObject, cssObject, elementIdentifier) {
        console.log(
            `${timestamp}, ${eventType}, ${eventObject}`,
            `| CSS: ${cssObject}`,
            `| Element: ${elementIdentifier}`
        );
    }
    

    function trackClicks() {
        document.addEventListener('click', function(event) {
            const target = event.target;
            const timestamp = getTimestamp();
            const eventType = 'click';
            const eventObject = getEventObjectType(target);
            const cssObject = getCSSObjectType(target);
            const elementIdentifier = getElementIdentifier(target);

            printEvent(timestamp, eventType, eventObject, cssObject, elementIdentifier);
            
        }, true); 
    }
    

    function trackPageLoad() {
        window.addEventListener('load', function() {
            const timestamp = getTimestamp();
            const eventType = 'view';
            const eventObject = 'page';
            const cssObject = 'document';
            const elementIdentifier = 'body';

            printEvent(timestamp, eventType, eventObject, cssObject, elementIdentifier);
        });
    }
    

    function trackPageVisibility() {
        document.addEventListener('visibilitychange', function() {
            if (!document.hidden) {
                const timestamp = getTimestamp();
                const eventType = 'view';
                const eventObject = 'page';
                const cssObject = 'document';
                const elementIdentifier = 'body';
                

                printEvent(timestamp, eventType, eventObject, cssObject, elementIdentifier);
            }
        });
    }

    function trackElementViews() {
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                    const target = entry.target;
                    const timestamp = getTimestamp();
                    const eventType = 'view';
                    const eventObject = getEventObjectType(target);
                    const cssObject = getCSSObjectType(target);
                    const elementIdentifier = getElementIdentifier(target);

                    printEvent(timestamp, eventType, eventObject, cssObject, elementIdentifier);

                    observer.unobserve(target);
                }
            });
        }, {
            threshold: 0.5 
        });
        

        const elementsToObserve = document.querySelectorAll(
            'img, video, canvas, svg, section, article, [data-track-view]'
        );
        
        elementsToObserve.forEach(element => {
            observer.observe(element);
        });
    }
    
    
    function init() {
        console.log('%c========================================', 'color: #667eea;');
        console.log('%c🔍 Event Tracker Initialized', 'font-size: 14px; font-weight: bold; color: #4CAF50;');
        console.log('%cTracking: Click events and Page views', 'color: #666;');
        console.log('%cFormat: Timestamp, type_of_event, event_object | CSS | Element', 'color: #2196F3; font-style: italic;');
        console.log('%c========================================', 'color: #667eea;');

        trackClicks();
        trackPageLoad();
        trackPageVisibility();
        trackElementViews();
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();
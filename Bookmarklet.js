javascript:(function() {
    function simulateClick(element, selector) {
        if (!element) {
            console.error(`Element not found for selector: ${selector}`);
            return;
        }
        const event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        element.dispatchEvent(event);
    }

    function randomMultiplier() {
        return Math.random() * 0.33 + 1;
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function performActions() {
        try {

            // If code doesn't work, substitute the paths for the correct ones. View readme for more info.
            const button1Selector = 'the path here'; // Replace with the button1 selector
            const button2Selector = 'the path here'; // Replace with the button2 selector
            const button3Selector = 'the path here'; // Replace with the button3 selector

            // "all" checkbox
            const button1 = document.querySelector(button1Selector);
            // "Remove" button
            const button2 = document.querySelector(button2Selector);
            // Blue "remove" button
            const button3 = document.querySelector(button3Selector);

            simulateClick(button1, button1Selector);
            await sleep(300 * randomMultiplier());

            simulateClick(button2, button2Selector);
            await sleep(1000 * randomMultiplier());

            simulateClick(button3, button3Selector);
            await sleep(15000 * randomMultiplier());
        } catch (error) {
            console.error('Error performing actions:', error);
        }
    }

    async function main() {
        while (true) {
            await performActions();
        }
    }

    main();
})();
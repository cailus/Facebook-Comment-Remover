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
            const button1Selector = '#mount_0_0_yK > div > div:nth-child(1) > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x10cihs4.x1t2pt76.x1n2onr6.x1ja2u2z > div.x9f619.x2lah0s.x1nhvcw1.x1qjc9v5.xozqiw3.x1q0g3np.x78zum5.x1iyjqo2.x1t2pt76.x1n2onr6.x1ja2u2z.x1h6rjhl > div.x9f619.x1n2onr6.x1ja2u2z.xdt5ytf.x193iq5w.xeuugli.x1r8uery.x1iyjqo2.xs83m0k.x78zum5.x1t2pt76 > div > div > div > div > div > div:nth-child(3) > div:nth-child(1) > label > div.x9f619.x1ja2u2z.x1n2onr6.x1a2a7pz.x78zum5 > input'; // Replace with the button1 selector
            const button2Selector = '#mount_0_0_yK > div > div:nth-child(1) > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x10cihs4.x1t2pt76.x1n2onr6.x1ja2u2z > div.x9f619.x2lah0s.x1nhvcw1.x1qjc9v5.xozqiw3.x1q0g3np.x78zum5.x1iyjqo2.x1t2pt76.x1n2onr6.x1ja2u2z.x1h6rjhl > div.x9f619.x1n2onr6.x1ja2u2z.xdt5ytf.x193iq5w.xeuugli.x1r8uery.x1iyjqo2.xs83m0k.x78zum5.x1t2pt76 > div > div > div > div > div > div:nth-child(3) > div.xyamay9.x1pi30zi.x1l90r2v.x1swvt13.x78zum5.x1q0g3np > div.x78zum5.x1q0g3np > div > div'; // Replace with the button2 selector
            const button3Selector = '#mount_0_0_yK > div > div:nth-child(1) > div > div:nth-child(7) > div > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div.x1uvtmcs.x4k7w5x.x1h91t0o.x1beo9mf.xaigb6o.x12ejxvf.x3igimt.xarpa2k.xedcshv.x1lytzrv.x1t2pt76.x7ja8zs.x1n2onr6.x1qrby5j.x1jfb8zj > div > div > div > div > div > div > div.x1n2onr6.x1ja2u2z.x9f619.x78zum5.xdt5ytf.x2lah0s.x193iq5w.x1hlgzme.xvcs8rp.x1bpvpm7.xefnots.x13xjmei.xv7j57z > div > div > div > div:nth-child(1) > div'; // Replace with the button3 selector

            // "all" checkbox
            const button1 = document.querySelector(button1Selector);
            // "Remove" button
            const button2 = document.querySelector(button2Selector);
            // Blue "remove" button
            const button3 = document.querySelector(button3Selector);

            simulateClick(button1, button1Selector);
            await sleep(1000 * randomMultiplier());

            simulateClick(button2, button2Selector);
            await sleep(300 * randomMultiplier());

            simulateClick(button3, button3Selector);
            await sleep(12000 * randomMultiplier());
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

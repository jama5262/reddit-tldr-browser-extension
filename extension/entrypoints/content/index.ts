import { createPinia } from 'pinia'
import {ContentScriptContext} from "wxt/utils/content-script-context";
import RedditTldrContainer from '../../components/RedditTldrContainer.vue';
import "~/assets/tailwind.css";

const redditPostUrlPatterns = [
    'https://www.reddit.com/r/*/comments/*/*',
    'https://www.reddit.com/r/*/comments/*/comment/*'
]
const redditPostUrlPatternMatches = redditPostUrlPatterns.map(pattern => new MatchPattern(pattern));

export default defineContentScript({
    matches: redditPostUrlPatterns,
    cssInjectionMode: 'ui',
    async main(ctx) {
        ctx.addEventListener(window, 'wxt:locationchange', ({newUrl}) => {
            const hasContainer = document.getElementsByTagName('reddit-tldr-container').length > 0;
            const isRedditPostUrl = redditPostUrlPatternMatches
                .some(matcher => matcher.includes(newUrl));

            if (!hasContainer && isRedditPostUrl) {
                setTimeout(async () => {
                    await loadContentScript(ctx);
                }, 1000);
            }
        });

        await loadContentScript(ctx);
    },
});

async function loadContentScript(ctx: ContentScriptContext) {
    const ui = await createShadowRootUi(ctx, {
        name: 'reddit-tldr-container',
        position: 'inline',
        anchor: 'shreddit-post',
        append: 'first',
        onMount: (redditElement) => {
            let container = document.createElement("div");
            const app = createApp(RedditTldrContainer);
            app.use(createPinia());
            app.mount(container);

            redditElement.prepend(container);
            return {app, container};
        },
        onRemove: (elements) => {
            elements?.app?.unmount();
            elements?.container?.remove()
        },
    });

    ui.shadowHost.setAttribute("slot", "text-body")
    ui.mount();
}

import { z } from "zod";
const DOCS_URLS = {
    auroraEmbedApi: "https://docs.wistia.com/docs/player-embed-api",
    auroraAttrsProps: "https://docs.wistia.com/docs/player-attributes-and-properties",
    auroraMethods: "https://docs.wistia.com/docs/player-methods",
    auroraEvents: "https://docs.wistia.com/docs/player-events",
    auroraPopovers: "https://docs.wistia.com/docs/player-popover-embed-api",
    auroraReact: "https://docs.wistia.com/docs/player-react-component",
};
// Map user-facing topics to DOCS_URLS
const TOPIC_TO_KEY_MAP = {
    "Aurora Embeds Overview": "auroraEmbedApi",
    "Aurora Attributes and Properties": "auroraAttrsProps",
    "Aurora Methods": "auroraMethods",
    "Aurora Events": "auroraEvents",
    "Aurora Popover Embed API": "auroraPopovers",
    "Aurora React Component": "auroraReact",
};
// Extract valid topic names for the schema
const VALID_TOPICS = Object.keys(TOPIC_TO_KEY_MAP); // Cast for Zod enum
//Tool definition
export const wistiaDocumentationTool = {
    name: "wistia_api_doc",
    description: "Returns documentation links for Wistia Aurora Player API based on a topic.",
    inputSchema: z.object({
        topic: z.enum(VALID_TOPICS)
            .optional()
            .describe("The specific documentation topic to retrieve. Defaults to 'Aurora Embeds Overview'."),
    }),
    handler: async (args = {}) => {
        // Default to "Aurora Embeds Overview" if no topic is provided or if it's an empty string
        const requestedTopic = args.topic || "Aurora Embeds Overview";
        // Base response object
        const response = {
            timestamp: new Date().toISOString(),
            requestedTopic: requestedTopic,
        };
        // Find the corresponding key for DOCS_URLS using the map
        // Check if the provided topic is actually one of the valid keys in our map
        const urlKey = requestedTopic in TOPIC_TO_KEY_MAP ? TOPIC_TO_KEY_MAP[requestedTopic] : undefined;
        if (urlKey) {
            // Return success structure
            return {
                content: [{
                        type: "text",
                        text: `Documentation for '${requestedTopic}': ${DOCS_URLS[urlKey]}`
                    }]
            };
        }
        else {
            // Return error structure
            const errorMessage = `Topic '${requestedTopic}' is not valid. Available topics: ${Object.keys(TOPIC_TO_KEY_MAP).join(', ')}.`;
            return {
                content: [{
                        type: "text",
                        text: errorMessage
                    }],
                isError: true
            };
        }
    },
};

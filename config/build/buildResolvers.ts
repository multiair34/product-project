import {ResolveOptions} from "node:dns";

export function buildResolvers(): { extensions: string[] } {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}
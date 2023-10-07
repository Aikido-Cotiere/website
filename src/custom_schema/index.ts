import clone from 'clone';
import { RichTextSchema } from '@storyblok/vue'
import { SbHelpers, type ISbNode, type ISbSchema } from 'storyblok-js-client'

const schema: ISbSchema = clone(RichTextSchema);
const isEmailLinkType = (type: string) => type === 'email'
schema.marks.link = (node: ISbNode) => {
    if (!node.attrs) {
        return {
            tag: '',
        }
    }
    const escapeHTML = new SbHelpers().escapeHTML
    const attrs = { ...node.attrs }
    const { linktype = 'url' } = node.attrs
    delete attrs.linktype

    if (attrs.href) {
        let baseUrl = '';
        if (linktype == 'story' && import.meta.env.BASE_URL && import.meta.env.BASE_URL.length > 1) {
            baseUrl = import.meta.env.BASE_URL.substring(0, import.meta.env.BASE_URL.length - 1);
        }
        attrs.href = baseUrl + escapeHTML(node.attrs.href || '')
    }

    if (isEmailLinkType(linktype)) {
        attrs.href = `mailto:${attrs.href}`
    }

    if (attrs.anchor) {
        attrs.href = `${attrs.href}#${attrs.anchor}`
        delete attrs.anchor
    }

    if (attrs.custom) {
        for (const key in attrs.custom) {
            attrs[key] = attrs.custom[key]
        }
        delete attrs.custom
    }

    return {
        tag: [
            {
                tag: 'a',
                attrs: attrs,
            },
        ],
    }
};

export default schema;

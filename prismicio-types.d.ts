import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };


type PickContentRelationshipFieldData<
	TRelationship extends prismic.CustomTypeModelFetchCustomTypeLevel1 | prismic.CustomTypeModelFetchCustomTypeLevel2 | prismic.CustomTypeModelFetchGroupLevel1 | prismic.CustomTypeModelFetchGroupLevel2,
	TData extends Record<string, prismic.AnyRegularField | prismic.GroupField | prismic.NestedGroupField | prismic.SliceZone>,
	TLang extends string
> = |
	// Content relationship fields
	{
		[TSubRelationship in Extract<
			TRelationship["fields"][number], prismic.CustomTypeModelFetchContentRelationshipLevel1
		> as TSubRelationship["id"]]:
			ContentRelationshipFieldWithData<TSubRelationship["customtypes"], TLang>;
	} &
	// Group
	{
		[TGroup in Extract<
			TRelationship["fields"][number], prismic.CustomTypeModelFetchGroupLevel1 | prismic.CustomTypeModelFetchGroupLevel2
		> as TGroup["id"]]:
			TData[TGroup["id"]] extends prismic.GroupField<infer TGroupData>
				? prismic.GroupField<PickContentRelationshipFieldData<TGroup, TGroupData, TLang>>
				: never
	} &
	// Other fields
	{
		[TFieldKey in Extract<TRelationship["fields"][number], string>]:
			TFieldKey extends keyof TData ? TData[TFieldKey] : never;
	};

type ContentRelationshipFieldWithData<
	TCustomType extends readonly (prismic.CustomTypeModelFetchCustomTypeLevel1 | string)[] | readonly (prismic.CustomTypeModelFetchCustomTypeLevel2 | string)[],
	TLang extends string = string
> = {
	[ID in Exclude<TCustomType[number], string>["id"]]:
		prismic.ContentRelationshipField<
			ID,
			TLang,
			PickContentRelationshipFieldData<
				Extract<TCustomType[number], { id: ID }>,
				Extract<prismic.Content.AllDocumentTypes, { type: ID }>["data"],
				TLang
			>
		>
}[Exclude<TCustomType[number], string>["id"]];

type ContactDocumentDataSlicesSlice = never

/**
 * Content for Contact documents
 */
interface ContactDocumentData {
	/**
	 * Slice Zone field in *Contact*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/slices
	 */
	slices: prismic.SliceZone<ContactDocumentDataSlicesSlice>;/**
	 * Meta Title field in *Contact*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: contact.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	meta_title: prismic.KeyTextField;
	
	/**
	 * Meta Description field in *Contact*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: contact.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	meta_description: prismic.KeyTextField;
	
	/**
	 * Meta Image field in *Contact*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Contact document from Prismic
 *
 * - **API ID**: `contact`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<ContactDocumentData>, "contact", Lang>;

type FocusesDocumentDataSlicesSlice = FocusContentSlice

/**
 * Content for Focus documents
 */
interface FocusesDocumentData {
	/**
	 * Titre field in *Focus*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: focuses.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	title: prismic.RichTextField;
	
	/**
	 * Description field in *Focus*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: focuses.description
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	description: prismic.RichTextField;
	
	/**
	 * Couverture field in *Focus*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: focuses.cover
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	cover: prismic.ImageField<never>;
	
	/**
	 * Slice Zone field in *Focus*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: focuses.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/slices
	 */
	slices: prismic.SliceZone<FocusesDocumentDataSlicesSlice>;/**
	 * Meta Title field in *Focus*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: focuses.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	meta_title: prismic.KeyTextField;
	
	/**
	 * Meta Description field in *Focus*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: focuses.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	meta_description: prismic.KeyTextField;
	
	/**
	 * Meta Image field in *Focus*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: focuses.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Focus document from Prismic
 *
 * - **API ID**: `focuses`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FocusesDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<FocusesDocumentData>, "focuses", Lang>;

type IndexDocumentDataSlicesSlice = ShowcaseSlice | FocusesSlice | HeroSlice | BentoSlice | ContactSlice

/**
 * Content for Accueil documents
 */
interface IndexDocumentData {
	/**
	 * Slice Zone field in *Accueil*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: index.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/slices
	 */
	slices: prismic.SliceZone<IndexDocumentDataSlicesSlice>;/**
	 * Meta Title field in *Accueil*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: index.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	meta_title: prismic.KeyTextField;
	
	/**
	 * Meta Description field in *Accueil*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: index.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	meta_description: prismic.KeyTextField;
	
	/**
	 * Meta Image field in *Accueil*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: index.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Accueil document from Prismic
 *
 * - **API ID**: `index`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type IndexDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<IndexDocumentData>, "index", Lang>;

type NewsDocumentDataSlicesSlice = never

/**
 * Content for News documents
 */
interface NewsDocumentData {
	/**
	 * Slice Zone field in *News*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: news.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/slices
	 */
	slices: prismic.SliceZone<NewsDocumentDataSlicesSlice>;/**
	 * Meta Title field in *News*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: news.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	meta_title: prismic.KeyTextField;
	
	/**
	 * Meta Description field in *News*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: news.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	meta_description: prismic.KeyTextField;
	
	/**
	 * Meta Image field in *News*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: news.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * News document from Prismic
 *
 * - **API ID**: `news`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NewsDocument<Lang extends string = string> = prismic.PrismicDocumentWithUID<Simplify<NewsDocumentData>, "news", Lang>;

/**
 * Content for Paramètres documents
 */
interface SettingsDocumentData {
	/**
	 * Titre du site field in *Paramètres*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.site_title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	site_title: prismic.KeyTextField;
	
	/**
	 * Description du site field in *Paramètres*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.site_description
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	site_description: prismic.KeyTextField;
	
	/**
	 * Image du site field in *Paramètres*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.site_image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	site_image: prismic.ImageField<never>;
	
	/**
	 * Navigation field in *Paramètres*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: settings.navigation
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	navigation: prismic.Repeatable<prismic.LinkField<string, string, unknown, prismic.FieldState, "Lien" | "Bouton">>;
}

/**
 * Paramètres document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<SettingsDocumentData>, "settings", Lang>;

type StandardDocumentDataSlicesSlice = never

/**
 * Content for Standard documents
 */
interface StandardDocumentData {
	/**
	 * Titre field in *Standard*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: En italic pour de la mise en valeur
	 * - **API ID Path**: standard.title
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	title: prismic.RichTextField;
	
	/**
	 * Image field in *Standard*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: standard.image
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	image: prismic.ImageField<never>;
	
	/**
	 * Contenu field in *Standard*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: standard.body
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	body: prismic.RichTextField;
	
	/**
	 * CTA field in *Standard*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: standard.cta
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	cta: prismic.LinkField<string, string, unknown, prismic.FieldState, "Lien" | "Bouton">;
	
	/**
	 * Slice Zone field in *Standard*
	 *
	 * - **Field Type**: Slice Zone
	 * - **Placeholder**: *None*
	 * - **API ID Path**: standard.slices[]
	 * - **Tab**: Main
	 * - **Documentation**: https://prismic.io/docs/slices
	 */
	slices: prismic.SliceZone<StandardDocumentDataSlicesSlice>;/**
	 * Meta Title field in *Standard*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A title of the page used for social media and search engines
	 * - **API ID Path**: standard.meta_title
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	meta_title: prismic.KeyTextField;
	
	/**
	 * Meta Description field in *Standard*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: A brief summary of the page
	 * - **API ID Path**: standard.meta_description
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	meta_description: prismic.KeyTextField;
	
	/**
	 * Meta Image field in *Standard*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: standard.meta_image
	 * - **Tab**: SEO & Metadata
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	meta_image: prismic.ImageField<never>;
}

/**
 * Standard document from Prismic
 *
 * - **API ID**: `standard`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/content-modeling
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type StandardDocument<Lang extends string = string> = prismic.PrismicDocumentWithoutUID<Simplify<StandardDocumentData>, "standard", Lang>;

export type AllDocumentTypes = ContactDocument | FocusesDocument | IndexDocument | NewsDocument | SettingsDocument | StandardDocument;

/**
 * Item in *Bento → Default → Primary → Bento*
 */
export interface BentoSliceDefaultPrimaryBentoItem {
	/**
	 * Titre field in *Bento → Default → Primary → Bento*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bento.default.primary.bento[].title
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	title: prismic.RichTextField;
	
	/**
	 * Corps field in *Bento → Default → Primary → Bento*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bento.default.primary.bento[].body
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	body: prismic.RichTextField;
	
	/**
	 * Image field in *Bento → Default → Primary → Bento*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bento.default.primary.bento[].image
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	image: prismic.ImageField<never>;
	
	/**
	 * Afficher en grand ? field in *Bento → Default → Primary → Bento*
	 *
	 * - **Field Type**: Boolean
	 * - **Placeholder**: *None*
	 * - **Default Value**: false
	 * - **API ID Path**: bento.default.primary.bento[].is_wide
	 * - **Documentation**: https://prismic.io/docs/fields/boolean
	 */
	is_wide: prismic.BooleanField;
}

/**
 * Primary content in *Bento → Default → Primary*
 */
export interface BentoSliceDefaultPrimary {
	/**
	 * Titre field in *Bento → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Utiliser l'italic pour la mise en valeur (couleur)
	 * - **API ID Path**: bento.default.primary.title
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	title: prismic.RichTextField;
	
	/**
	 * Corps field in *Bento → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bento.default.primary.body
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	body: prismic.RichTextField;
	
	/**
	 * Bento field in *Bento → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: bento.default.primary.bento[]
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	bento: prismic.GroupField<Simplify<BentoSliceDefaultPrimaryBentoItem>>;
}

/**
 * Default variation for Bento Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type BentoSliceDefault = prismic.SharedSliceVariation<"default", Simplify<BentoSliceDefaultPrimary>, never>;

/**
 * Slice variation for *Bento*
 */
type BentoSliceVariation = BentoSliceDefault

/**
 * Bento Shared Slice
 *
 * - **API ID**: `bento`
 * - **Description**: Bento
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type BentoSlice = prismic.SharedSlice<"bento", BentoSliceVariation>;

/**
 * Primary content in *Contact → Default → Primary*
 */
export interface ContactSliceDefaultPrimary {
	/**
	 * Titre field in *Contact → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Utiliser l'italic pour la mise en valeur (couleur)
	 * - **API ID Path**: contact.default.primary.title
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	title: prismic.RichTextField;
	
	/**
	 * Adresse field in *Contact → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact.default.primary.address
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	address: prismic.RichTextField;
	
	/**
	 * Email field in *Contact → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact.default.primary.email
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	email: prismic.RichTextField;
	
	/**
	 * Iframe google maps field in *Contact → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: contact.default.primary.iframe_google_maps
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	iframe_google_maps: prismic.KeyTextField;
}

/**
 * Default variation for Contact Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type ContactSliceDefault = prismic.SharedSliceVariation<"default", Simplify<ContactSliceDefaultPrimary>, never>;

/**
 * Slice variation for *Contact*
 */
type ContactSliceVariation = ContactSliceDefault

/**
 * Contact Shared Slice
 *
 * - **API ID**: `contact`
 * - **Description**: Contact
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type ContactSlice = prismic.SharedSlice<"contact", ContactSliceVariation>;

/**
 * Item in *FocusContent → Default → Primary → Details*
 */
export interface FocusContentSliceDefaultPrimaryDetailsItem {
	/**
	 * Titre de contenu field in *FocusContent → Default → Primary → Details*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Utiliser l'italic pour la mise en valeur (couleur)
	 * - **API ID Path**: focus_content.default.primary.details[].content_title
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	content_title: prismic.RichTextField;
	
	/**
	 * Accroche de contenu field in *FocusContent → Default → Primary → Details*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Utiliser l'italic pour la mise en valeur (couleur)
	 * - **API ID Path**: focus_content.default.primary.details[].content_punchline
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	content_punchline: prismic.RichTextField;
	
	/**
	 * Corps du contenu field in *FocusContent → Default → Primary → Details*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: focus_content.default.primary.details[].content_body
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	content_body: prismic.RichTextField;
	
	/**
	 * Image de contenu field in *FocusContent → Default → Primary → Details*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: focus_content.default.primary.details[].content_image
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	content_image: prismic.ImageField<never>;
}

/**
 * Primary content in *FocusContent → Default → Primary*
 */
export interface FocusContentSliceDefaultPrimary {
	/**
	 * Ancre field in *FocusContent → Default → Primary*
	 *
	 * - **Field Type**: Text
	 * - **Placeholder**: Ancre pour la navigation via des #
	 * - **API ID Path**: focus_content.default.primary.anchor
	 * - **Documentation**: https://prismic.io/docs/fields/text
	 */
	anchor: prismic.KeyTextField;
	
	/**
	 * Titre field in *FocusContent → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: focus_content.default.primary.title
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	title: prismic.RichTextField;
	
	/**
	 * Sous titre field in *FocusContent → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: Utiliser l'italic pour la mise en valeur (couleur)
	 * - **API ID Path**: focus_content.default.primary.sub_title
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	sub_title: prismic.RichTextField;
	
	/**
	 * Contenu field in *FocusContent → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: focus_content.default.primary.content
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	content: prismic.RichTextField;
	
	/**
	 * Image field in *FocusContent → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: focus_content.default.primary.image
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	image: prismic.ImageField<never>;
	
	/**
	 * Liens field in *FocusContent → Default → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: focus_content.default.primary.liens
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	liens: prismic.Repeatable<prismic.LinkField<string, string, unknown, prismic.FieldState, "Lien" | "Bouton">>;
	
	/**
	 * Details field in *FocusContent → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: focus_content.default.primary.details[]
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	details: prismic.GroupField<Simplify<FocusContentSliceDefaultPrimaryDetailsItem>>;
}

/**
 * Default variation for FocusContent Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type FocusContentSliceDefault = prismic.SharedSliceVariation<"default", Simplify<FocusContentSliceDefaultPrimary>, never>;

/**
 * Slice variation for *FocusContent*
 */
type FocusContentSliceVariation = FocusContentSliceDefault

/**
 * FocusContent Shared Slice
 *
 * - **API ID**: `focus_content`
 * - **Description**: ContenuFocus
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type FocusContentSlice = prismic.SharedSlice<"focus_content", FocusContentSliceVariation>;

/**
 * Item in *Focuses → Default → Primary → Focus sur*
 */
export interface FocusesSliceDefaultPrimaryFocusesItem {
	/**
	 * Link field in *Focuses → Default → Primary → Focus sur*
	 *
	 * - **Field Type**: Content Relationship
	 * - **Placeholder**: *None*
	 * - **API ID Path**: focuses.default.primary.focuses[].link
	 * - **Documentation**: https://prismic.io/docs/fields/content-relationship
	 */
	link: ContentRelationshipFieldWithData<[{"id":"focuses","fields":["title","description","cover"]}]>;
}

/**
 * Primary content in *Focuses → Default → Primary*
 */
export interface FocusesSliceDefaultPrimary {
	/**
	 * Titre field in *Focuses → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: focuses.default.primary.title
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	title: prismic.RichTextField;
	
	/**
	 * Corps field in *Focuses → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: focuses.default.primary.body
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	body: prismic.RichTextField;
	
	/**
	 * Focus sur field in *Focuses → Default → Primary*
	 *
	 * - **Field Type**: Group
	 * - **Placeholder**: *None*
	 * - **API ID Path**: focuses.default.primary.focuses[]
	 * - **Documentation**: https://prismic.io/docs/fields/repeatable-group
	 */
	focuses: prismic.GroupField<Simplify<FocusesSliceDefaultPrimaryFocusesItem>>;
}

/**
 * Default variation for Focuses Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type FocusesSliceDefault = prismic.SharedSliceVariation<"default", Simplify<FocusesSliceDefaultPrimary>, never>;

/**
 * Slice variation for *Focuses*
 */
type FocusesSliceVariation = FocusesSliceDefault

/**
 * Focuses Shared Slice
 *
 * - **API ID**: `focuses`
 * - **Description**: Focus sur quelque chose
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type FocusesSlice = prismic.SharedSlice<"focuses", FocusesSliceVariation>;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
	/**
	 * Titre field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.title
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	title: prismic.RichTextField;
	
	/**
	 * Accroche field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.punchline
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	punchline: prismic.RichTextField;
	
	/**
	 * CTAs field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.ctas
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	ctas: prismic.Repeatable<prismic.LinkField<string, string, unknown, prismic.FieldState, never>>;
	
	/**
	 * Image field in *Hero → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: hero.default.primary.image
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	image: prismic.ImageField<never>;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<"default", Simplify<HeroSliceDefaultPrimary>, never>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *Showcase → Default → Primary*
 */
export interface ShowcaseSliceDefaultPrimary {
	/**
	 * Titre field in *Showcase → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: showcase.default.primary.title
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	title: prismic.RichTextField;
	
	/**
	 * Image field in *Showcase → Default → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: showcase.default.primary.image
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	image: prismic.ImageField<never>;
	
	/**
	 * Icone field in *Showcase → Default → Primary*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **Default Value**: ph:gear
	 * - **API ID Path**: showcase.default.primary.icon
	 * - **Documentation**: https://prismic.io/docs/fields/select
	 */
	icon: prismic.SelectField<"ph:gear" | "ph:arrows-clockwise" | "noto:martial-arts-uniform", "filled">;
	
	/**
	 * Sous-titre field in *Showcase → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: showcase.default.primary.punchline
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	punchline: prismic.RichTextField;
	
	/**
	 * Corps field in *Showcase → Default → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: showcase.default.primary.body
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	body: prismic.RichTextField;
	
	/**
	 * CTA field in *Showcase → Default → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: showcase.default.primary.cta
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	cta: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Default variation for Showcase Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type ShowcaseSliceDefault = prismic.SharedSliceVariation<"default", Simplify<ShowcaseSliceDefaultPrimary>, never>;

/**
 * Primary content in *Showcase → Reversed Layout → Primary*
 */
export interface ShowcaseSliceReversedPrimary {
	/**
	 * Titre field in *Showcase → Reversed Layout → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: showcase.reversed.primary.title
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	title: prismic.RichTextField;
	
	/**
	 * Image field in *Showcase → Reversed Layout → Primary*
	 *
	 * - **Field Type**: Image
	 * - **Placeholder**: *None*
	 * - **API ID Path**: showcase.reversed.primary.image
	 * - **Documentation**: https://prismic.io/docs/fields/image
	 */
	image: prismic.ImageField<never>;
	
	/**
	 * Icone field in *Showcase → Reversed Layout → Primary*
	 *
	 * - **Field Type**: Select
	 * - **Placeholder**: *None*
	 * - **Default Value**: gear
	 * - **API ID Path**: showcase.reversed.primary.icon
	 * - **Documentation**: https://prismic.io/docs/fields/select
	 */
	icon: prismic.SelectField<"gear" | "cycle", "filled">;
	
	/**
	 * Sous-titre field in *Showcase → Reversed Layout → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: showcase.reversed.primary.punchline
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	punchline: prismic.RichTextField;
	
	/**
	 * Corps field in *Showcase → Reversed Layout → Primary*
	 *
	 * - **Field Type**: Rich Text
	 * - **Placeholder**: *None*
	 * - **API ID Path**: showcase.reversed.primary.body
	 * - **Documentation**: https://prismic.io/docs/fields/rich-text
	 */
	body: prismic.RichTextField;
	
	/**
	 * CTA field in *Showcase → Reversed Layout → Primary*
	 *
	 * - **Field Type**: Link
	 * - **Placeholder**: *None*
	 * - **API ID Path**: showcase.reversed.primary.cta
	 * - **Documentation**: https://prismic.io/docs/fields/link
	 */
	cta: prismic.LinkField<string, string, unknown, prismic.FieldState, never>;
}

/**
 * Reversed Layout variation for Showcase Slice
 *
 * - **API ID**: `reversed`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type ShowcaseSliceReversed = prismic.SharedSliceVariation<"reversed", Simplify<ShowcaseSliceReversedPrimary>, never>;

/**
 * Slice variation for *Showcase*
 */
type ShowcaseSliceVariation = ShowcaseSliceDefault | ShowcaseSliceReversed

/**
 * Showcase Shared Slice
 *
 * - **API ID**: `showcase`
 * - **Description**: Showcase
 * - **Documentation**: https://prismic.io/docs/slices
 */
export type ShowcaseSlice = prismic.SharedSlice<"showcase", ShowcaseSliceVariation>;

declare module "@prismicio/client" {
	interface CreateClient {
		(repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
	}
	
	interface CreateWriteClient {
		(repositoryNameOrEndpoint: string, options: prismic.WriteClientConfig): prismic.WriteClient<AllDocumentTypes>;
	}
	
	interface CreateMigration {
		(): prismic.Migration<AllDocumentTypes>;
	}
	
	namespace Content {
		export type {
			ContactDocument,
			ContactDocumentData,
			ContactDocumentDataSlicesSlice,
			FocusesDocument,
			FocusesDocumentData,
			FocusesDocumentDataSlicesSlice,
			IndexDocument,
			IndexDocumentData,
			IndexDocumentDataSlicesSlice,
			NewsDocument,
			NewsDocumentData,
			NewsDocumentDataSlicesSlice,
			SettingsDocument,
			SettingsDocumentData,
			StandardDocument,
			StandardDocumentData,
			StandardDocumentDataSlicesSlice,
			AllDocumentTypes,
			BentoSlice,
			BentoSliceDefaultPrimaryBentoItem,
			BentoSliceDefaultPrimary,
			BentoSliceVariation,
			BentoSliceDefault,
			ContactSlice,
			ContactSliceDefaultPrimary,
			ContactSliceVariation,
			ContactSliceDefault,
			FocusContentSlice,
			FocusContentSliceDefaultPrimaryDetailsItem,
			FocusContentSliceDefaultPrimary,
			FocusContentSliceVariation,
			FocusContentSliceDefault,
			FocusesSlice,
			FocusesSliceDefaultPrimaryFocusesItem,
			FocusesSliceDefaultPrimary,
			FocusesSliceVariation,
			FocusesSliceDefault,
			HeroSlice,
			HeroSliceDefaultPrimary,
			HeroSliceVariation,
			HeroSliceDefault,
			ShowcaseSlice,
			ShowcaseSliceDefaultPrimary,
			ShowcaseSliceReversedPrimary,
			ShowcaseSliceVariation,
			ShowcaseSliceDefault,
			ShowcaseSliceReversed
		}
	}
}
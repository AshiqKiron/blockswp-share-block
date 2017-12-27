const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const el = wp.element.createElement;

import { Component } from 'react'

import {
    Facebook,
    Twitter
} from "./components/SocialComponents";


import Checkbox from './components/Checkbox';

registerBlockType( 'blockswp/share-block', {
	title: __( 'Social Share', 'text-domain' ),
	icon: 'networking',
	category: 'common',
	attributes: {
        shareUrl: {
        	default: exampleImage
        },
        shareTitle: {
            default: __( 'Post Title', 'gb')
        },
        showCounts: {
            default: 'true',
        },
        showIcon: {
            default: 'true'
        },
        iconSize :{
            default: 32
        },
        showFacebook: {
            default: 'true'
        },
        showTwitter: {
            default: 'true'
        },
    },
    edit({attributes, setAttributes, className, focus, id}) {

        return (
			<div className={ className }>
                {focus &&

                    <div className="blockswp-share-block-settings">
                        <div className="blockswp-share-block-settings-section">
                            <Checkbox
                                idAttr="blockswp-share-block-show-facebook"
                                label={__( 'Facebook', 'text-domain')}
                                checked={attributes.showFacebook}
                                toggleCheckboxChange={(event)=> setAttributes({showFacebook:event.target.checked.toString()})}
                            />
                            <Checkbox
                                idAttr="blockswp-share-block-show-twitter"
                                label={__( 'Twitter', 'text-domain')}
                                checked={attributes.showTwitter}
                                toggleCheckboxChange={(event)=> setAttributes({showTwitter:event.target.checked.toString()})}
                            />
                        </div>
                        <div className="blockswp-share-block-settings-section">
                            <Checkbox
                                idAttr="blockswp-share-block-show-icon"
                                label={__( 'Show Icon', 'text-domain')}
                                checked={attributes.showIcon}
                                toggleCheckboxChange={(event)=> setAttributes({showIcon:event.target.checked.toString()})}
                            />

                            <Checkbox
                                idAttr="blockswp-share-block-show-counts"
                                label={__( 'Show Counts', 'text-domain')}
                                checked={attributes.showIcon}
                                toggleCheckboxChange={(event)=> setAttributes({showCounts:event.target.checked.toString()})}
                            />

                            <div className="blockswp-share-block-setting">
                                <label
                                    for="blockswp-share-block-show-icon-size"
                                >
                                    {__('Icon Size', 'text-domain')}
                                </label>
                                <input
                                    id="blockswp-share-block-show-icon-size"
                                    type="number"
                                    value={attributes.iconSize}
                                    min="32"
                                    max="96"
                                    step="32"
                                    onChange={(event) => {
                                        setAttributes({iconSize: event.target.value})
                                    }}
                                />
                            </div>

                        </div>
                    </div>
                }

                <div className="wp-block-blockswp-share-blocks">
                    {'true' === attributes.showFacebook &&
                        <Facebook
                            shareUrl={attributes.shareUrl}
                            shareTitle={attributes.shareTitle}
                            showCounts={attributes.showCounts}
                            showIcon={attributes.showIcon}
                            iconSize={attributes.iconSize}
                        >
                        </Facebook>
                    }

                    {'true' === attributes.showTwitter &&
                        <Twitter
                            shareUrl={attributes.shareUrl}
                            shareTitle={attributes.shareTitle}
                            showCounts={attributes.showCounts}
                            showIcon={attributes.showIcon}
                            iconSize={attributes.iconSize}
                        >
                        </Twitter>
                    }
                </div>

            </div>
		);

	},

    save({attributes, className}) {
		return (
			<p className={ className }>Social</p>
		);
	},
} );

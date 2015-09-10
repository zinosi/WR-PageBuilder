/**
 * @version    $Id$
 * @package    WR PageBuilder
 * @author     WooRockets Team <support@woorockets.com>
 * @copyright  Copyright (C) 2012 woorockets.com. All Rights Reserved.
 * @license    GNU/GPL v2 or later http://www.gnu.org/licenses/gpl-2.0.html
 *
 * Websites: http://www.woorockets.com
 * Technical Support:  Feedback - http://www.woorockets.com
 */

/**
 * Custom script for Textbox element
 */
var initContentEditor;

( function ($) {
    "use strict";

    $.IGSelectFonts = $.IGSelectFonts || {};

    $.IGColorPicker = $.IGColorPicker || {};

    $.WR_Text = $.WR_Text || {};

    $.WR_Text = function () {
        if (typeof $.IGSelectFonts != 'undefined') { new $.IGSelectFonts(); }
        if (typeof $.IGColorPicker != 'undefined') { new $.IGColorPicker(); }
    };

    $(document).ready(function () {
        $.WR_Text();
        var  init1;

        /***TEMP FIX VERSION 4.3 by Vik***/
       jQuery('body').on('click','#param-text-html',function(){  return false; });
       jQuery('body').on('click','#param-text-tmce',function(){  return false; });

       jQuery('body').on('click','#param-text-html',function()
       {  
                tinymce.remove(tinymce.get('param-text'));
                jQuery(this).closest('#wp-param-text-wrap').addClass('html-active');
                jQuery(this).closest('#wp-param-text-wrap').removeClass('tmce-active');
        });
       jQuery('body').on('click','#param-text-tmce',function(){   

        init1 = tinyMCEPreInit.mceInit['param-text'];
        tinymce.init( init1 );

        jQuery(this).closest('#wp-param-text-wrap').removeClass('html-active');
                jQuery(this).closest('#wp-param-text-wrap').addClass('tmce-active');
        });

     /** END TEMP FIX **/

        // Fix conflict script when create new tinymce editor
        $('#content-html').click();
        tinymce.remove(tinymce.get('param-text'));

        // Re-init content editor
        if (initContentEditor == null) {
        	initContentEditor = tinyMCEPreInit.mceInit['content'];
        }
        $('#content-tmce').removeAttr('onclick');
        $('#content-tmce').off('click');
        $('#content-tmce').click(function() {
        	tinymce.remove(tinymce.get('content'));
        	tinymce.init(initContentEditor);
        	$('#wp-content-wrap').removeClass('html-active');
        	$('#wp-content-wrap').addClass('tmce-active');
        });
    });
})(jQuery);
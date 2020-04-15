(function ($) {
    'use strict';
    $('#jstree_sample_1').jstree({
        "types": {
            "default": {
                "icon": "../../../assets/images/file-icons/extension/folder.png"
            },
            "file": {
                "icon": "../../../assets/images/file-icons/extension/doc-file.png",
                "valid_children": []
            }
        },
        "plugins": [
            "types"
        ]
    });
    $('#jstree_sample_2').jstree({
        "types": {
            "default": {
                "icon": "../../../assets/images/file-icons/extension/folder.png"
            },
            "file": {
                "icon": "../../../assets/images/file-icons/extension/doc-file.png",
                "valid_children": []
            }
        },
        "plugins": [
            "types",
            "checkbox"
        ]
    });
    $('#jstree_sample_3').jstree({
        "types": {
            "default": {
                "icon": "../../../assets/images/file-icons/extension/folder.png"
            },
            "file": {
                "icon": "../../../assets/images/file-icons/extension/doc-file.png",
                "valid_children": []
            }
        },
        "core": {
            // so that create works
            "check_callback": true
        },
        "plugins": [
            "types",
            "contextmenu"
        ]
    });
    $('#jstree_sample_4').jstree({
        "types": {
            "default": {
                "icon": "../../../assets/images/file-icons/extension/folder.png"
            },
            "file": {
                "icon": "../../../assets/images/file-icons/extension/doc-file.png",
                "valid_children": []
            },
            'f-open': {
                'icon': 'fa fa-folder-open fa-fw'
            },
            'f-closed': {
                'icon': 'fa fa-folder fa-fw'
            }
        },
        "core": {
            "variant": "large",
            "check_callback": true
        },
        "plugins": [
            "types",
            "dnd",
            "wholerow"
        ]
    });
})(jQuery);
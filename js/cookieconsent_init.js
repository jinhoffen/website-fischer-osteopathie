---
# ensures Jekyll properly reads file
---

// obtain cookieconsent plugin
var cc = initCookieConsent();

// run plugin with config object
cc.run({
    current_lang: 'de',
    autoclear_cookies: false,                   // default: false
    cookie_name: 'cookie_consent',              // default: 'cc_cookie'
    cookie_expiration: 365,                     // default: 182
    page_scripts: true,                         // default: false
    force_consent: false,                       // default: false

    // auto_language: null,                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                           // default: true
    // delay: 0,                                // default: 0
    // hide_from_bots: false,                   // default: false
    // remove_cookie_tables: false              // default: false
    // cookie_domain: location.hostname,        // default: current domain
    // cookie_path: '/',                        // default: root
    // cookie_same_site: 'Lax',
    // use_rfc_cookie: false,                   // default: false
    // revision: 0,                             // default: 0

    gui_options: {
        consent_modal: {
            layout: 'cloud',                    // box,cloud,bar
            position: 'bottom center',          // bottom,middle,top + left,right,center
            transition: 'slide'                 // zoom,slide
        },
        settings_modal: {
            layout: 'bar',                      // box,bar
            position: 'left',                   // right,left (available only if bar layout selected)
            transition: 'slide'                 // zoom,slide
        }
    },

    onFirstAction: function(){
        console.log('onFirstAction fired');
    },

    onAccept: function (cookie) {
        console.log('onAccept fired!')
    },

    onChange: function (cookie, changed_preferences) {
        console.log('onChange fired!');

        // If analytics category is disabled => disable google analytics
        if (!cc.allowedCategory('analytics')) {
            typeof gtag === 'function' && gtag('consent', 'update', {
                'analytics_storage': 'denied'
            });
        }
    },

    languages: {
        'en': {
            consent_modal: {
                title: 'Privacy Settings',
                description: 'This website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <a href="{{ "/datenschutz" | prepend: site.baseurl }}" class="cc-link">Privacy Policy</a>',
                primary_btn: {
                    text: 'Accept all',
                    role: 'accept_all'      //'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Preferences',
                    role: 'settings'       //'settings' or 'accept_necessary'
                },
                revision_message: '<br><br>Dear user, terms and conditions have changed since the last time you visisted.'
            },
            settings_modal: {
                title: 'Cookie settings',
                save_settings_btn: 'Save current selection',
                accept_all_btn: 'Accept all',
                reject_all_btn: 'Reject all',
                close_btn_label: 'Close',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Purpose'},
                    {col4: 'Expiration'}
                ],
                blocks: [
                    {
                        title: 'Cookie usage',
                        description: 'We use cookies to collect information about you. We use this information to ensure the proper functioning of this website (strictly necessary cookies), to provide extra functionalities and to analyze how users interact with the website (Functionalities & Analytics). Expand the box for each type of cookies to get a detailed list of cookies that we set. Decide whether you accept the usage via the toggle bars and click on "Save current selection". Alternatively, accept or reject all cookies that are not strictly necessary. You can withdraw or change your consent at any time on the <a href="{{ "/datenschutz" | prepend: site.baseurl }}" class="cc-link">Privacy Policy</a> page.'
                    }, {
                        title: 'Strictly necessary cookies',
                        description: 'These cookies ensure a proper functioning of the website. Their use cannot be rejected.',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true  //cookie categories with readonly=true are all treated as "necessary cookies"
                        },
                        cookie_table: [
                            {
                                col1: 'cookie_consent',
                                col2: '<a href="{{ site.baseurl }}/">{{ site.title }}</a>',
                                col3: 'Stores your cookie preferences.',
                                col4: '1 year',
                                is_regex: true
                            }
                        ]
                    }, {
                        title: 'Functionalities & Analytics',
                        description: 'These cookies extend the functionalities and to analyze user interactions with this website.',
                        toggle: {
                            value: 'analytics',
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                col1: '_ga',
                                col2: '<a href="https://www.google.com" rel="noopener" target="_blank">Google</a>',
                                col3: 'Registers a unique ID that is used to generate statistical data on how the visitor uses the website.',
                                col4: '2 years'
                            },
                            {
                                col1: '_ga_#',
                                col2: '<a href="https://www.google.com" rel="noopener" target="_blank">Google</a>',
                                col3: 'Used by Google Analytics to collect data on the number of times a user has visited the website as well as dates for the first and most recent visit.',
                                col4: '2 years'
                            },
                            {
                                col1: '_gid',
                                col2: '<a href="https://www.google.com" rel="noopener" target="_blank">Google</a>',
                                col3: 'Registers a unique ID that is used to generate statistical data on how the visitor uses the website.',
                                col4: '1 day'
                            }
                        ]
                    }
                ]
            }
        },
        'de': {
            consent_modal: {
                title: 'Datenschutzeinstellungen',
                description: 'Diese Website verwendet technisch notwendige Cookies, um die Funktionsfähigkeit der Website zu gewährleisten und um das Nutzerverhalten zu analysieren. Letztere Cookies werden nur nach Ihrer Einwilligung gesetzt. <a href="{{ "/datenschutz" | prepend: site.baseurl }}" class="cc-link">Datenschutzerklärung</a>.',
                primary_btn: {
                    text: 'Alle annehmen',
                    role: 'accept_all'      //'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Einstellungen',
                    role: 'settings'        //'settings' or 'accept_necessary'
                },
                revision_message: '<br><br>Sehr geehrter Nutzer, die Nutzungsbedingungen haben sich seit Ihrem letzten Besuch geändert.'
            },
            settings_modal: {
                title: 'Verwendung von Cookies',
                save_settings_btn: 'Annehmen',
                accept_all_btn: 'Alle annehmen',
                reject_all_btn: 'Alle verweigern',
                close_btn_label: 'Schließen',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Anbieter'},
                    {col3: 'Zweck'},
                    {col4: 'Verfall'}
                ],
                blocks: [
                    {
                        title: 'Cookie Verwendung',
                        description: 'Wir nutzen Cookies, um Informationen über Sie zu sammeln. Wir nutzen diese Informationen, um die Funktionalität der Website zu gewährleisten (technisch notwendige Cookies), um zusätzliche Funktionen anzubieten und um die Interaktionen der Nutzer mit der Website zu analysieren (Funktionalitäten & Analytics). Sie können die Cookies einsehen, welche diesen Kategorien jeweils zugeordnet sind, indem sie auf eben diese klicken. Treffen Sie die Entscheidung, ob Sie der jeweiligen Verwendung zustimmen, indem Sie den Kippschalter verwenden und klicken auf "Annehmen". Alternativ können Sie auch der Verwendung aller Cookies zustimmen oder sie ablehnen. Sie können Ihre Entscheidung jederzeit auf der Seite der <a href="{{ "/datenschutz" | prepend: site.baseurl }}" class="cc-link">Datenschutzerklärung</a> widerrufen.'
                    }, {
                        title: 'Technisch notwendige Cookies',
                        description: 'Diese Cookies gewährleisten die Funktionsfähigkeit der Website. Ihre Verwendung kann nicht abgelehnt werden.',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true  //cookie categories with readonly=true are all treated as "necessary cookies"
                        },
                        cookie_table: [
                            {
                                col1: 'cookie_consent',
                                col2: '<a href="{{ site.baseurl }}/">{{ site.title }}</a>',
                                col3: 'Speichert Ihre Cookie Präferenzen.',
                                col4: '1 Jahr',
                                is_regex: true
                            }
                        ]
                    }, {
                        title: 'Funktionalitäten & Analytics',
                        description: 'Diese Cookies erlauben den Funktionsumfang zu erweitern und das Nutzerverhalten zu analysieren.',
                        toggle: {
                            value: 'analytics',
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                col1: '_ga',
                                col2: '<a href="https://www.google.com" rel="noopener" target="_blank">Google</a>',
                                col3: 'Registriert eine eindeutige ID, die verwendet wird, um statistische Daten dazu, wie der Besucher die Website nutzt, zu generieren.',
                                col4: '2 years'
                            },
                            {
                                col1: '_ga_#',
                                col2: '<a href="https://www.google.com" rel="noopener" target="_blank">Google</a>',
                                col3: 'Sammelt Daten dazu, wie oft ein Benutzer eine Website besucht hat, sowie Daten für den ersten und letzten Besuch. Von Google Analytics verwendet.',
                                col4: '2 years'
                            },
                            {
                                col1: '_gid',
                                col2: '<a href="https://www.google.com" rel="noopener" target="_blank">Google</a>',
                                col3: 'Registriert eine eindeutige ID, die verwendet wird, um statistische Daten dazu, wie der Besucher die Website nutzt, zu generieren.',
                                col4: '1 Tag'
                            }
                        ]
                    }
                ]
            }
        }
    }
});
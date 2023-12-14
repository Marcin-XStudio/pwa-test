import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
"start_url": "https://pwa-test-rb9tsdj75-x-studio-ffd737f9.vercel.app/",
"display_override": ["window-controls-overlay"], 
"protocol_handlers": [{"protocol":"mailto","url":"/newEmail?to=%s"}], 
"name": "PWA-TEST",
"short_name": "PWA",
"display": "standalone",
"description": "I'm trying to test my pwa",
"lang": " english",
"dir": "auto",
"theme_color": "#000000",
"background_color": "#000000",
"orientation": "any",
"icons": [
    {
        "src": "https://www.pwabuilder.com/assets/icons/icon_512.png",
        "sizes": "512x512",
        "type": "image/png",
        "purpose": "maskable"
    },
    {
        "src": "https://www.pwabuilder.com/assets/icons/icon_192.png",
        "sizes": "192x192",
        "type": "image/png",
        "purpose": "any"
    }
],
"screenshots": [
    {
        "src": "https://www.pwabuilder.com/assets/screenshots/screen1.png",
        "sizes": "2880x1800",
        "type": "image/png",
    }
],
"prefer_related_applications": false,
"shortcuts": [
    {
        "name":"The name you would like to be displayed for your shortcut",
        "url":"The url you would like to open when the user chooses this shortcut. This must be a URL local to your PWA. For example: If my start_url is /, this URL must be something like /shortcut",
        "description":"A description of the functionality of this shortcut"
    }
]
}
}
export default class GrapesjsInit {
    public static initializationTemplate = (bucketname,
        accessKeyId,
        secretAccessKey, 
        sessionToken,
        eventEmitter,
        components,
        styles) => {
        return {
            allowScripts: 1,
            container: '#gjs',
            components: components,
            style: styles,
            plugins: ['gjs-plugin-s3', 'gjs-blocks-basic',
                'gjs-plugin-publish-s3',
                'gjs-plugin-button-event',
                'gjs-blocks-flexbox',
                'grapesjs-custom-code'
            ],
            pluginsOpts: {
                'gjs-plugin-s3': {
                    imgFormats: ["png", "jpeg", "jpg"],
                    bucketName: bucketname,
                    prefix: "content/img/",
                    accessKeyId: accessKeyId,
                    secretAccessKey: secretAccessKey,
                    sessionToken: sessionToken
                },
                'gjs-blocks-basic': {},
                'gjs-plugin-publish-s3': {
                    bucketName: bucketname,
                    accessKeyId: accessKeyId,
                    secretAccessKey: secretAccessKey,
                    sessionToken: sessionToken
                },
                'gjs-plugin-button-event': {
                    buttons: [{
                        name: 'saveTemplate',
                        panel: 'options',
                        eventName: 'gjs-saveTemplate',
                        icon: 'fa fa-floppy-o',
                        active: false,
                        data: { message: 'Save template.' },
                        eventEmitter: eventEmitter
                    }, {
                        name: 'signOut',
                        panel: 'options',
                        eventName: 'gjs-signOut',
                        icon: 'fa fa-sign-out',
                        active: false,
                        data: { message: 'Clear session.' },
                        eventEmitter: eventEmitter
                    }]
                },
                'gjs-blocks-flexbox': {},
                'grapesjs-custom-code': {}
            },
            storageManager: {
                autoload: false
            }
        };
    };

    public static initaliseEmptyTemplate = (bucketname,
        accessKeyId,
        secretAccessKey, 
        sessionToken,
        eventEmitter) => {
        let components = '<div class="txt-red">Hello folks! Welcome to Bodyless CMS</div>';
        let styles = '.txt-red{color: blue}';
        let result = GrapesjsInit.initializationTemplate(
            bucketname,
            accessKeyId,
            secretAccessKey, 
            sessionToken,
            eventEmitter,
            components,
            styles
        );
        return result;
    }
}
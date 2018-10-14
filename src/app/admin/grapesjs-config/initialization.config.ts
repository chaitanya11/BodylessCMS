import ThemeConstants from '../constants/theme.constants';

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
                    imgFormats: ['png', 'jpeg', 'jpg'],
                    bucketName: bucketname, // should be ng code bucket.
                    prefix: 'content/img/', // FIXME should be assets/img/
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
    }

    public static initaliseEmptyTemplate = (bucketname,
        accessKeyId,
        secretAccessKey,
        sessionToken,
        eventEmitter) => {
        const components = ThemeConstants.NEW_GRAPESJS_COMPONENTS;
        const styles = ThemeConstants.NEW_GRAPESJS_STYLES;
        const result = GrapesjsInit.initializationTemplate(
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

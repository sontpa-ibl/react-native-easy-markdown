const defaultStyles = {
    block: {
        marginBottom: 10,
        flexWrap: 'wrap',
        flexDirection: 'row'
    },
    blockQuote: {
        borderLeftWidth: 5,
        borderLeftColor: '#aaaaaa',
        paddingLeft: 10
    },
    h1: {
        fontSize: 32,
        marginTop: 20,
        marginBottom: 8
    },
    h2: {
        fontSize: 24,
        marginTop: 16,
        marginBottom: 8
    },
    h3: {
        fontSize: 18,
        marginTop: 16,
        marginBottom: 8
    },
    h4: {
        fontSize: 16,
        marginTop: 16,
        marginBottom: 8
    },
    h5: {
        fontSize: 13,
        marginTop: 12,
        marginBottom: 6
    },
    h6: {
        fontSize: 11,
        marginTop: 12,
        marginBottom: 6
    },
    hr: {
        alignSelf: 'stretch',
        height:1,
        backgroundColor:'#333333',
        marginVertical: 8,
    },
    text: {
        alignSelf: 'flex-start'
    },
    strong: {
        fontWeight: 'bold',
    },
    em: {
        fontStyle: 'italic',
    },
    del: {
        textDecorationLine: 'line-through',
    },
    u: {
        textDecorationLine: 'underline',
    },
    linkWrapper: {
        alignSelf: 'flex-start',
    },
    link: {
        textDecorationLine: 'underline',
        alignSelf: 'flex-start'
    },
    list: {
        marginBottom: 20
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginVertical: 5,
        flexWrap: 'wrap',
        flex: 1
    },
    listItemContent: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flex: 1
    },
    listItemTextContent: {

    },
    listItemBullet: {
        width: 6,
        marginRight: 10,
    },
    listItemNumber: {
        marginRight: 10
    },
    imageWrapper: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    image: {
        flex: 1,
        minWidth: 200,
        height: 200
    }
};

module.exports = defaultStyles;

import { StyleSheet } from "react-vr";

const primaryColor = "#2b2b2b"

export default StyleSheet.create({
    navButton: {
        position:"absolute",
        padding: .05
    },
    gazeButton: {
        paddingHorizontal:.05, 
        width: 1, 
        height: .15, 
        marginBottom:.05, 
        backgroundColor: "white"
    },
    bottomNavTransform: {      
        transform: [
            { translate: [-.55, -.5, -1]  },
        ]
    },
    leftNavTransform: {        
        transform: [
            { translate: [-2.5, .6, -3]  },
        ]
    },
    leftNavOverlay: {
        position:"absolute",
        backgroundColor: "green",
        padding: .55,
        width:1,
        paddingBottom: .8,
        opacity:.5,
        transform: [
            { translate: [-2.5, .6, -3.01]  },
        ],
    },
    bottomNavContainer: {        
        position:"absolute",
        backgroundColor: "green",
        padding: .13,
        width:1.1,
        opacity:.5,
        transform: [
            { translate: [-.55, -.5, -1]  },
        ],
    }
})
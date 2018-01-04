import { StyleSheet } from "react-vr";

const primaryColor = "#2b2b2b"

export default StyleSheet.create({
    sphere: {
        color: "#2b2b2b"
    },
    textContainer: {
        position: "absolute",
        height:.02
    },
    locationName: {
        textAlign: "center", 
        fontWeight: "400",
        color:"white",
        fontSize: .02,
        height:.03
    },
    panel: {        
        position:"absolute",
        height:.8,
        width:.5,
        paddingHorizontal:.05,
        backgroundColor:"rgba(0,0,0,.7)",
        borderColor:"rgba(124,124,120,.7)", 
        borderWidth: 0.005,
        borderRadius: .04, 
        transform: [{
            translate: [-1,.4,1.7]
        },
        {
            rotateY: "25deg"
        }]    
    },
    panelHeading: {
        color:"white",
        fontWeight: "400",
        marginBottom:.05,
        marginTop:0,
        fontSize:.09,
    },
    panelBody: {
        color:"white",
        fontWeight: "200",
        fontSize:.03,
    },
    indented: {
        marginLeft: .05
    }
})
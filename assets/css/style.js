import { StyleSheet, Dimensions, Image, Platform } from "react-native";

const { width, height } = Dimensions.get("window");
export const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export const colormenu = "#407ED2";
export const colorbutton = "#ED1B24";
export const colorbgheader = "#E81E2A";
export const colorbg = "#FAFAFA";
export const colorbgbox = "#fff";
export const colorborder = "#F4F4F4";
export const thumbnail_xp = 80;
const radius_width = 4;
const padding = 10;
const fontcolor = '#333';

export const styles = StyleSheet.create({
    flex1: {
        flex: 1
    },
    flex10: {
        flex: 10
    },
    flex20: {
        flex: 20
    },
    flex30: {
        flex: 30
    },
    flex40: {
        flex: 4
    },
    flex50: {
        flex: 50
    },
    flex60: {
        flex: 60
    },
    flex70: {
        flex: 70
    },
    flex80: {
        flex: 80
    },
    flex90: {
        flex: 90
    },
    flex100: {
        flex: 100
    },
    height10: {
        height: 10
    },
    height0: {
        height: 0
    },
    flex_row: {
        flexDirection: 'row'
    },
    marginHorizontal: {
        marginHorizontal: 10
    },
    paddingHorizontal: {
        paddingHorizontal: 10
    },
    background: {
        backgroundColor: colorbg
    },
    icon_tab: {
        height: 20,
        width: 20
    },
    item_xp_left: {
        flex: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    item_xp_title: {
        fontSize: 18,
        color: fontcolor
    },
    item_xp_noi_dung: {
        fontSize: 15,
        color: fontcolor
    },
    item_xp_muc_phat: {
        fontWeight: '500',
        fontSize: 16,
        marginVertical: 5,
        color: colorbutton
    },
    item_xp_wraper: {
        flex: 1,
        flexDirection: 'row',
        padding: 5,
        backgroundColor: colorbgbox,
        marginBottom: 7,
        borderRadius: radius_width
    },
    item_xp_touchableopacity: {
        flex: 1,
        paddingHorizontal: padding,
    },
    item_xp_wraper_boxshadow: {
        borderWidth: 1,
        borderColor: colorborder,
        borderBottomWidth: 0,
        shadowColor: colorborder,
        shadowOffset: { width: 1, height: radius_width },
        shadowOpacity: 0.3,
        shadowRadius: radius_width,
        elevation: 1,
    },
    search_wraper: {
        paddingHorizontal: padding,
        backgroundColor: colormenu
    },
    search_item: {
        backgroundColor: colorbgbox,
        borderRadius: radius_width,
        height: 35,
        marginVertical: 5,
        paddingHorizontal: padding,
        paddingVertical: 5,
        borderBottomColor: 'transparent'
    },
    header_title: {
        color: colorbgbox,
        fontSize: 17,
        fontWeight: '400'
    },
    header_body: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sidebar_wacrapt: {
        flex: 1,
        backgroundColor: colormenu
    },
    sidebar_box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: colorbgbox,
        borderStyle: 'solid'
    },
    sidebar_box_items: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    sidebar_items_icon: {
        width: 40,
        height: 40
    },
    tab_items_icon: {
        width: 20,
        height: 20,
        tintColor:'#fff'
    },
    sidebar_items_title: {
        color: colorbgbox,
        marginTop: 5
    },
    fab_wacrapt: {
        backgroundColor: colormenu
    },
    detail_xp_box: {
        marginHorizontal: 10,
        backgroundColor: "#fff",
        padding: 10,
        marginBottom: 5
    },
    detail_xp_wacrapt: {
        marginTop: 10
    },
    detail_xp_left_icon: {
        width: 40,
        height: 40
    },
    detail_xp_right_conetnet: {
        paddingRight: 10,
        alignItems: 'center',
        justifyContent: "center"
    },
    detail_xp_text_bold: {
        color: colorbutton,
        fontWeight: '500'
    },
    detail_xp_text: {
        fontWeight: "normal"
    },
    detail_xp_menuhv: {
        paddingHorizontal: padding,
        backgroundColor: colormenu,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: padding,
        marginHorizontal: padding,
        shadowOffset: {
            width: 5,
            height: radius_width
        },
        shadowColor: colorbg,
        shadowOpacity: 0.3,
        shadowRadius: radius_width,
        elevation: 1,
        borderRadius: 1
    },
    detail_xp_menu_icon: {
        fontSize: 30,
        color: colorbgbox,
        paddingRight: 10
    },
    detail_xp_menu_title: {
        color: colorbgbox
    },
    hot_call_tentinh: {
        fontSize: 17,
        fontWeight: '400',
        color: '#333'
    },
    hot_call_sodt_tinh: {
        color: '#ED1B24',
        fontSize: 16,
        fontWeight: '500'
    },
    content_center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    justifyContent_center: {
        justifyContent: 'center',
    },
    item_bb_left: {
        paddingVertical: 5
    },
    search_spinner_box: {
        justifyContent: 'center',
        top: 10
    },
    search_emtry_box: {
        flex: 0,
        backgroundColor: colorbg,
        justifyContent: 'center',
        alignItems: 'center',
        height: deviceHeight - 45
    },
    search_emtry_icon: {
        fontSize: 100,
        color: colormenu
    },
    search_header_left: {
        flex: 1,
        alignItems: 'flex-start'
    },
    search_header_icon: {
        fontSize: 30,
        color: colorbgbox
    },
    search_header_item: {
        backgroundColor: colorbgbox,
        marginVertical: 10,
        height: 35,
        padding: 10,
        flex: 8,
        justifyContent: 'center'
    },
    search_header_input: {
        height: 40,
        justifyContent: 'center'
    },
    search_header_right: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 10
    },
    // new style home page
    position_full:{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    home_image: { 
        width: width, 
        height: (width / 2) - 10,
        resizeMode: 'stretch'
    },
    home_scrollView: {
        flex: 1,
        marginTop: 10, 
        paddingHorizontal: 5
    },
    home_scrollView_view: {
        marginBottom: 10
    },

    // /deatail 

    deatail_image_ads: {
        width: 'auto',
        height: (width / 3) - 10,
        resizeMode: 'contain',
        justifyContent:'center',
        alignItems: 'center',
    },
});


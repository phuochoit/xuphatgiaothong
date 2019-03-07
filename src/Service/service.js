import React, { Component } from 'react';

export function get_image_xu_phat(id_group, id_xe) {
    image_group = null;
    switch (id_group) {
        case 64:
            image_group = require('../../assets/images/bao_hiem.png');
            break;
        case 2:
            if (id_xe == 1) {
                image_group = require('../../assets/images/car_driver.png');
            } else if (id_xe == 33) {
                image_group = require('../../assets/images/phuong_tien_truck.png');
            } else if (id_xe == 22) {
                image_group = require('../../assets/images/phuong_tien_bus.png');
            } else {
                image_group = require('../../assets/images/man.png');
            }
            break;
        case 128:
            if (id_xe == 1) {
                image_group = require('../../assets/images/car.png');
            } else if (id_xe == 22) {
                image_group = require('../../assets/images/phuong_tien_bus.png');
            } else {
                image_group = require('../../assets/images/motorbike.png');
            }
            break;
        case 132:
            if (id_xe == 1) {
                image_group = require('../../assets/images/car.png');
            } else {
                image_group = require('../../assets/images/motorbike.png');
            }
            break;
        case 4:
            image_group = require('../../assets/images/luu_thong.png');
            break;
        case 32:
            image_group = require('../../assets/images/toc_do.png');
            break;
        case 16:
            if (id_xe == 1) {
                image_group = require('../../assets/images/car.png');
            } else if (id_xe == 33) {
                image_group = require('../../assets/images/phuong_tien_truck.png');
            } else {
                image_group = require('../../assets/images/phuong_tien.png');
            }
            break;
        case 1:
            image_group = require('../../assets/images/bao_hieu.png');
            break;
        case 8:
            image_group = require('../../assets/images/giay_phep.png');
            break;
        case 6:
        case 0:
            if (id_xe == 1) {
                image_group = require('../../assets/images/car.png');
            }
            break;
        case 136:
        case 144:
        case 12:
            if (id_xe == 1) {
                image_group = require('../../assets/images/car_driver.png');
            } else if (id_xe == 22) {
                image_group = require('../../assets/images/phuong_tien_bus.png');
            } else if (id_xe == 33) {
                image_group = require('../../assets/images/phuong_tien_truck.png');
            }
            break;
        case 3316:
            if (id_xe == 33) {
                image_group = require('../../assets/images/car_driver.png');
            }
            break;
        case 148:
            if (id_xe == 33) {
                image_group = require('../../assets/images/phuong_tien_truck.png');
            } else if (id_xe == 22) {
                image_group = require('../../assets/images/phuong_tien_bus.png');
            }
            break;
        case 2216:
        case 17:
            if (id_xe == 22) {
                image_group = require('../../assets/images/phuong_tien_bus.png');
            }
            break;
        default:
            image_group = require('../../assets/images/no-image.jpg');
            break;
    }

    return image_group;
}

export function get_image_bb(name) {
    url = null;
    switch (name) {
        case 'd101':
            url = require('../../assets/images/d101.jpg');
            break;
        case 'd102':
            url = require('../../assets/images/d102.jpg');
            break;
        case 'd103a':
            url = require('../../assets/images/d103a.jpg');
            break;
        case 'd103b':
            url = require('../../assets/images/d103b.jpg');
            break;
        case 'd103c':
            url = require('../../assets/images/d103c.jpg');
            break;
        case 'd104':
            url = require('../../assets/images/d104.jpg');
            break;
        case 'd105':
            url = require('../../assets/images/d105.jpg');
            break;
        case 'd106':
            url = require('../../assets/images/d106.jpg');
            break;
        case 'd107':
            url = require('../../assets/images/d107.jpg');
            break;
        case 'd108':
            url = require('../../assets/images/d108.jpg');
            break;
        case 'd109':
            url = require('../../assets/images/d109.jpg');
            break;
        case 'd110a':
            url = require('../../assets/images/d110a.jpg');
            break;
        case 'd110b':
            url = require('../../assets/images/d110b.jpg');
            break;
        case 'd111a':
            url = require('../../assets/images/d111a.jpg');
            break;
        case 'd111b':
            url = require('../../assets/images/d111b.jpg');
            break;
        case 'd111c':
            url = require('../../assets/images/d111c.jpg');
            break;
        case 'd111d':
            url = require('../../assets/images/d111d.jpg');
            break;
        case 'd112':
            url = require('../../assets/images/d112.jpg');
            break;
        case 'd113':
            url = require('../../assets/images/d113.jpg');
            break;
        case 'd114':
            url = require('../../assets/images/d114.jpg');
            break;
        case 'd115':
            url = require('../../assets/images/d115.jpg');
            break;
        case 'd116':
            url = require('../../assets/images/d116.jpg');
            break;
        case 'd117':
            url = require('../../assets/images/d117.jpg');
            break;
        case 'd118':
            url = require('../../assets/images/d118.jpg');
            break;
        case 'd119':
            url = require('../../assets/images/d119.jpg');
            break;
        case 'd120':
            url = require('../../assets/images/d120.jpg');
            break;
        case 'd121':
            url = require('../../assets/images/d121.jpg');
            break;
        case 'd122':
            url = require('../../assets/images/d122.jpg');
            break;
        case 'd123a':
            url = require('../../assets/images/d123a.jpg');
            break;
        case 'd123b':
            url = require('../../assets/images/d123b.jpg');
            break;
        case 'd124a':
            url = require('../../assets/images/d124a.jpg');
            break;
        case 'd124b':
            url = require('../../assets/images/d124b.jpg');
            break;
        case 'd125':
            url = require('../../assets/images/d125.jpg');
            break;
        case 'd126':
            url = require('../../assets/images/d126.jpg');
            break;
        case 'd127':
            url = require('../../assets/images/d127.jpg');
            break;
        case 'd128':
            url = require('../../assets/images/d128.jpg');
            break;
        case 'd129':
            url = require('../../assets/images/d129.jpg');
            break;
        case 'd130':
            url = require('../../assets/images/d130.jpg');
            break;
        case 'd132':
            url = require('../../assets/images/d132.jpg');
            break;
        case 'd133':
            url = require('../../assets/images/d133.jpg');
            break;
        case 'd134':
            url = require('../../assets/images/d134.jpg');
            break;
        case 'd135':
            url = require('../../assets/images/d135.jpg');
            break;
        case 'd136':
            url = require('../../assets/images/d136.jpg');
            break;
        case 'd137':
            url = require('../../assets/images/d137.jpg');
            break;
        case 'd138':
            url = require('../../assets/images/d138.jpg');
            break;
        case 'd139':
            url = require('../../assets/images/d139.jpg');
            break;
        case 'd201':
            url = require('../../assets/images/d201.jpg');
            break;
        case 'd201b':
            url = require('../../assets/images/d201b.jpg');
            break;
        case 'd202':
            url = require('../../assets/images/d202.jpg');
            break;
        case 'd203a':
            url = require('../../assets/images/d203a.jpg');
            break;
        case 'd203b':
            url = require('../../assets/images/d203b.jpg');
            break;
        case 'd203c':
            url = require('../../assets/images/d203c.jpg');
            break;
        case 'd204':
            url = require('../../assets/images/d204.jpg');
            break;
        case 'd205a':
            url = require('../../assets/images/d205a.jpg');
            break;
        case 'd205b':
            url = require('../../assets/images/d205b.jpg');
            break;
        case 'd205c':
            url = require('../../assets/images/d205c.jpg');
            break;
        case 'd205d':
            url = require('../../assets/images/d205d.jpg');
            break;
        case 'd205e':
            url = require('../../assets/images/d205e.jpg');
            break;
        case 'd206':
            url = require('../../assets/images/d206.jpg');
            break;
        case 'd207a':
            url = require('../../assets/images/d207a.jpg');
            break;
        case 'd207b':
            url = require('../../assets/images/d207b.jpg');
            break;
        case 'd207c':
            url = require('../../assets/images/d207c.jpg');
            break;
        case 'd208':
            url = require('../../assets/images/d208.jpg');
            break;
        case 'd209':
            url = require('../../assets/images/d209.jpg');
            break;
        case 'd210':
            url = require('../../assets/images/d210.jpg');
            break;
        case 'd211':
            url = require('../../assets/images/d211.jpg');
            break;
        case 'd212':
            url = require('../../assets/images/d212.jpg');
            break;
        case 'd213':
            url = require('../../assets/images/d213.jpg');
            break;
        case 'd214':
            url = require('../../assets/images/d214.jpg');
            break;
        case 'd215a':
            url = require('../../assets/images/d215a.jpg');
            break;
        case 'd215b':
            url = require('../../assets/images/d215b.jpg');
            break;
        case 'd216':
            url = require('../../assets/images/d216.jpg');
            break;
        case 'd217':
            url = require('../../assets/images/d217.jpg');
            break;
        case 'd218':
            url = require('../../assets/images/d218.jpg');
            break;
        case 'd219':
            url = require('../../assets/images/d219.jpg');
            break;
        case 'd220':
            url = require('../../assets/images/d220.jpg');
            break;
        case 'd221a':
            url = require('../../assets/images/d221a.jpg');
            break;
        case 'd221b':
            url = require('../../assets/images/d221b.jpg');
            break;
        case 'd222':
            url = require('../../assets/images/d222.jpg');
            break;
        case 'd223':
            url = require('../../assets/images/d223.jpg');
            break;
        case 'd224':
            url = require('../../assets/images/d224.jpg');
            break;
        case 'd225':
            url = require('../../assets/images/d225.jpg');
            break;
        case 'd226':
            url = require('../../assets/images/d226.jpg');
            break;
        case 'd227':
            url = require('../../assets/images/d227.jpg');
            break;
        case 'd228':
            url = require('../../assets/images/d228.jpg');
            break;
        case 'd229':
            url = require('../../assets/images/d229.jpg');
            break;
        case 'd230':
            url = require('../../assets/images/d230.jpg');
            break;
        case 'd231':
            url = require('../../assets/images/d231.jpg');
            break;
        case 'd232':
            url = require('../../assets/images/d232.jpg');
            break;
        case 'd233':
            url = require('../../assets/images/d233.jpg');
            break;
        case 'd234':
            url = require('../../assets/images/d234.jpg');
            break;
        case 'd235':
            url = require('../../assets/images/d235.jpg');
            break;
        case 'd236':
            url = require('../../assets/images/d236.jpg');
            break;
        case 'd237':
            url = require('../../assets/images/d237.jpg');
            break;
        case 'd238':
            url = require('../../assets/images/d238.jpg');
            break;
        case 'd239':
            url = require('../../assets/images/d239.jpg');
            break;
        case 'd240':
            url = require('../../assets/images/d240.jpg');
            break;
        case 'd241':
            url = require('../../assets/images/d241.jpg');
            break;
        case 'd242a':
            url = require('../../assets/images/d242a.jpg');
            break;
        case 'd242b':
            url = require('../../assets/images/d242b.jpg');
            break;
        case 'd243':
            url = require('../../assets/images/d243.jpg');
            break;
        case 'd244':
            url = require('../../assets/images/d244.jpg');
            break;
        case 'd245':
            url = require('../../assets/images/d245.jpg');
            break;
        case 'd246a':
            url = require('../../assets/images/d246a.jpg');
            break;
        case 'd246b':
            url = require('../../assets/images/d246b.jpg');
            break;
        case 'd246c':
            url = require('../../assets/images/d246c.jpg');
            break;
        case 'd301a':
            url = require('../../assets/images/d301a.jpg');
            break;
        case 'd301b':
            url = require('../../assets/images/d301b.jpg');
            break;
        case 'd301c':
            url = require('../../assets/images/d301c.jpg');
            break;
        case 'd301d':
            url = require('../../assets/images/d301d.jpg');
            break;
        case 'd301e':
            url = require('../../assets/images/d301e.jpg');
            break;
        case 'd301f':
            url = require('../../assets/images/d301f.jpg');
            break;
        case 'd301h':
            url = require('../../assets/images/d301h.jpg');
            break;
        case 'd301i':
            url = require('../../assets/images/d301i.jpg');
            break;
        case 'd302a':
            url = require('../../assets/images/d302a.jpg');
            break;
        case 'd302b':
            url = require('../../assets/images/d302b.jpg');
            break;
        case 'd303':
            url = require('../../assets/images/d303.jpg');
            break;
        case 'd304':
            url = require('../../assets/images/d304.jpg');
            break;
        case 'd305':
            url = require('../../assets/images/d305.jpg');
            break;
        case 'd306':
            url = require('../../assets/images/d306.jpg');
            break;
        case 'd307':
            url = require('../../assets/images/d307.jpg');
            break;
        case 'd308a':
            url = require('../../assets/images/d308a.jpg');
            break;
        case 'd308b':
            url = require('../../assets/images/d308b.jpg');
            break;
        case 'd309':
            url = require('../../assets/images/d309.jpg');
            break;
        case 'd401':
            url = require('../../assets/images/d401.jpg');
            break;
        case 'd402':
            url = require('../../assets/images/d402.jpg');
            break;
        case 'd403a':
            url = require('../../assets/images/d403a.jpg');
            break;
        case 'd403b':
            url = require('../../assets/images/d403b.jpg');
            break;
        case 'd404a':
            url = require('../../assets/images/d404a.jpg');
            break;
        case 'd404b':
            url = require('../../assets/images/d404b.jpg');
            break;
        case 'd405a':
            url = require('../../assets/images/d405a.jpg');
            break;
        case 'd405b':
            url = require('../../assets/images/d405b.jpg');
            break;
        case 'd405c':
            url = require('../../assets/images/d405c.jpg');
            break;
        case 'd406':
            url = require('../../assets/images/d406.jpg');
            break;
        case 'd407a':
            url = require('../../assets/images/d407a.jpg');
            break;
        case 'd407b':
            url = require('../../assets/images/d407b.jpg');
            break;
        case 'd407c':
            url = require('../../assets/images/d407c.jpg');
            break;
        case 'd408a':
            url = require('../../assets/images/d408a.jpg');
            break;
        case 'd409':
            url = require('../../assets/images/d409.jpg');
            break;
        case 'd410':
            url = require('../../assets/images/d410.jpg');
            break;
        case 'd411':
            url = require('../../assets/images/d411.jpg');
            break;
        case 'd412':
            url = require('../../assets/images/d412.jpg');
            break;
        case 'd413a':
            url = require('../../assets/images/d413a.jpg');
            break;
        case 'd413b':
            url = require('../../assets/images/d413b.jpg');
            break;
        case 'd413c':
            url = require('../../assets/images/d413c.jpg');
            break;
        case 'd414a':
            url = require('../../assets/images/d414a.jpg');
            break;
        case 'd414b':
            url = require('../../assets/images/d414b.jpg');
            break;
        case 'd414c':
            url = require('../../assets/images/d414c.jpg');
            break;
        case 'd414d':
            url = require('../../assets/images/d414d.jpg');
            break;
        case 'd415':
            url = require('../../assets/images/d415.jpg');
            break;
        case 'd416':
            url = require('../../assets/images/d416.jpg');
            break;
        case 'd417a':
            url = require('../../assets/images/d417a.jpg');
            break;
        case 'd417b':
            url = require('../../assets/images/d417b.jpg');
            break;
        case 'd417c':
            url = require('../../assets/images/d417c.jpg');
            break;
        case 'd418':
            url = require('../../assets/images/d418.jpg');
            break;
        case 'd419':
            url = require('../../assets/images/d419.jpg');
            break;
        case 'd420':
            url = require('../../assets/images/d420.jpg');
            break;
        case 'd421':
            url = require('../../assets/images/d421.jpg');
            break;
        case 'd422':
            url = require('../../assets/images/d422.jpg');
            break;
        case 'd423':
            url = require('../../assets/images/d423.jpg');
            break;
        case 'd424':
            url = require('../../assets/images/d424.jpg');
            break;
        case 'd425':
            url = require('../../assets/images/d425.jpg');
            break;
        case 'd426':
            url = require('../../assets/images/d426.jpg');
            break;
        case 'd427':
            url = require('../../assets/images/d427.jpg');
            break;
        case 'd428':
            url = require('../../assets/images/d428.jpg');
            break;
        case 'd429':
            url = require('../../assets/images/d429.jpg');
            break;
        case 'd430':
            url = require('../../assets/images/d430.jpg');
            break;
        case 'd431':
            url = require('../../assets/images/d431.jpg');
            break;
        case 'd432':
            url = require('../../assets/images/d432.jpg');
            break;
        case 'd433':
            url = require('../../assets/images/d433.jpg');
            break;
        case 'd434':
            url = require('../../assets/images/d434.jpg');
            break;
        case 'd435':
            url = require('../../assets/images/d435.jpg');
            break;
        case 'd436':
            url = require('../../assets/images/d436.jpg');
            break;
        case 'd437':
            url = require('../../assets/images/d437.jpg');
            break;
        case 'd438':
            url = require('../../assets/images/d438.jpg');
            break;
        case 'd439':
            url = require('../../assets/images/d439.jpg');
            break;
        case 'd440':
            url = require('../../assets/images/d440.jpg');
            break;
        case 'd441':
            url = require('../../assets/images/d441.jpg');
            break;
        case 'd443':
            url = require('../../assets/images/d443.jpg');
            break;
        case 'd444':
            url = require('../../assets/images/d444.jpg');
            break;
        case 'd445':
            url = require('../../assets/images/d445.jpg');
            break;
        case 'd447':
            url = require('../../assets/images/d447.jpg');
            break;
        case 'd448':
            url = require('../../assets/images/d448.jpg');
            break;
        case 'd501':
            url = require('../../assets/images/d501.jpg');
            break;
        case 'd502':
            url = require('../../assets/images/d502.jpg');
            break;
        case 'd503a':
            url = require('../../assets/images/d503a.jpg');
            break;
        case 'd503b':
            url = require('../../assets/images/d503b.jpg');
            break;
        case 'd503c':
            url = require('../../assets/images/d503c.jpg');
            break;
        case 'd503d':
            url = require('../../assets/images/d503d.jpg');
            break;
        case 'd504':
            url = require('../../assets/images/d504.jpg');
            break;
        case 'd505':
            url = require('../../assets/images/d505.jpg');
            break;
        case 'd506':
            url = require('../../assets/images/d506.jpg');
            break;
        case 'd507':
            url = require('../../assets/images/d507.jpg');
            break;
        case 'd508':
            url = require('../../assets/images/d508.jpg');
            break;
        case 'd509':
            url = require('../../assets/images/d509.jpg');
            break;
        default:
            url = require('../../assets/images/no-image.jpg');
            break;
    }

    return url;
}

export function getIdLoaiXe(idxe) {
    console.log(idxe);
    id = '';
    switch (idxe) {
        case 1:
            id = '1';
            break;
        case 2:
            id = '2,66,4';
            break;
        case 5:
            id = '5,75,11,111,65,8,72,7144,33,96,64,32,24'
            break
        case 16:
            id = '16';
            break;
        case 22:
            id = '22';
            break;
        case 33:
            id = '33';
            break;
    }
    return id;
}
import React, { Component } from 'react';

export function get_image_xu_phat(id_group, id_xe) {
    image_group = null;
    switch (id_group) {
        case 64:
            image_group = require('../../assets/images/bao_hiem.png') ;
            break;
        case 2:
            if (id_xe == 1) {
                image_group = require('../../assets/images/car_driver.png');
            } else if (id_xe == 33) {
                image_group = require('../../assets/images/phuong_tien_truck.png');
            } else if (id_xe == 22) {
                image_group = require('../../assets/images/phuong_tien_bus.png');
            }else {
                image_group = require('../../assets/images/man.png');
            }
            break;
        case 128:
            if (id_xe == 1) {
                image_group = require('../../assets/images/car.png');
            } else if (id_xe == 22) {
                image_group = require('../../assets/images/phuong_tien_bus.png');
            }  else {
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
            }else {
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
            }else if(id_xe == 22) {
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
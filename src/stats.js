const showStats = () => {
    axios({
        method: 'get',
        url: 'https://car-service-api-app.herokuapp.com/stats',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    }).then(resp => {
        console.log(resp.data);
        //maintenance
        const mAudiValue = document.getElementById('audi-maintenance');
        const mBmwValue = document.getElementById('bmw-maintenance');
        const mCitroenValue = document.getElementById('citroen-maintenance');
        const mFiatValue = document.getElementById('fiat-maintenance');
        const mHondaValue = document.getElementById('honda-maintenance');
        const mNissanValue = document.getElementById('nissan-maintenance');
        const mOpelValue = document.getElementById('opel-maintenance');
        const mToyotaValue = document.getElementById('toyota-maintenance');


        if (resp.data.maintenance.Audi === undefined) {
            mAudiValue.textContent = 0
        } else {
            mAudiValue.textContent = resp.data.maintenance.Audi;
        };

        if (resp.data.maintenance.BMW === undefined) {
            mBmwValue.textContent = 0
        } else {
            mBmwValue.textContent = resp.data.maintenance.Audi;
        };

        if (resp.data.maintenance.Citroen === undefined) {
            mCitroenValue.textContent = 0
        } else {
            mCitroenValue.textContent = resp.data.maintenance.Citroen;
        };

        if (resp.data.maintenance.Fiat === undefined) {
            mFiatValue.textContent = 0
        } else {
            mFiatValue.textContent = resp.data.maintenance.Fiat;
        };

        if (resp.data.maintenance.Honda === undefined) {
            mHondaValue.textContent = 0
        } else {
            mHondaValue.textContent = resp.data.maintenance.Honda;
        };

        if (resp.data.maintenance.Nissan === undefined) {
            mNissanValue.textContent = 0
        } else {
            mNissanValue.textContent = resp.data.maintenance.Nissan;
        };

        if (resp.data.maintenance.Opel === undefined) {
            mOpelValue.textContent = 0
        } else {
            mOpelValue.textContent = resp.data.maintenance.Opel;
        };

        if (resp.data.maintenance.Toyota === undefined) {
            mToyotaValue.textContent = 0
        } else {
            mToyotaValue.textContent = resp.data.maintenance.Toyota;
        };


        //cooling-system
        const csAudiValue = document.getElementById('audi-cooling-system');
        const csBmwValue = document.getElementById('bmw-cooling-system');
        const csCitroenValue = document.getElementById('citroen-cooling-system');
        const csFiatValue = document.getElementById('fiat-cooling-system');
        const csHondaValue = document.getElementById('honda-cooling-system');
        const csNissanValue = document.getElementById('nissan-cooling-system');
        const csOpelValue = document.getElementById('opel-cooling-system');
        const csToyotaValue = document.getElementById('toyota-cooling-system');

        if (resp.data.cooling_system.Audi === undefined) {
            csAudiValue.textContent = 0
        } else {
            csAudiValue.textContent = resp.cooling_system.Audi;
        };

        if (resp.data.cooling_system.BMW === undefined) {
            csBmwValue.textContent = 0
        } else {
            csBmwValue.textContent = resp.data.cooling_system.BMW;
        };

        if (resp.data.cooling_system.Citroen === undefined) {
            csCitroenValue.textContent = 0
        } else {
            csCitroenValue.textContent = resp.data.cooling_system.Citroen;
        };

        if (resp.data.cooling_system.Fiat === undefined) {
            csFiatValue.textContent = 0
        } else {
            csFiatValue.textContent = resp.data.cooling_system.Fiat;
        };

        if (resp.data.cooling_system.Honda === undefined) {
            csHondaValue.textContent = 0
        } else {
            csHondaValue.textContent = resp.data.cooling_system.Honda;
        };

        if (resp.data.cooling_system.Nissan === undefined) {
            csNissanValue.textContent = 0
        } else {
            csNissanValue.textContent = resp.data.cooling_system.Nissan;
        };

        if (resp.data.cooling_system.Opel === undefined) {
            csOpelValue.textContent = 0
        } else {
            csOpelValue.textContent = resp.data.cooling_system.Opel;
        };

        if (resp.data.cooling_system.Toyota === undefined) {
            csToyotaValue.textContent = 0
        } else {
            csToyotaValue.textContent = resp.data.cooling_system.Toyota;
        };


        //exhaust-system
        const exsAudiValue = document.getElementById('audi-exhaust-system');
        const exsBmwValue = document.getElementById('bmw-exhaust-system');
        const exsCitroenValue = document.getElementById('citroen-exhaust-system');
        const exsFiatValue = document.getElementById('fiat-exhaust-system');
        const exsHondaValue = document.getElementById('honda-exhaust-system');
        const exsNissanValue = document.getElementById('nissan-exhaust-system');
        const exsOpelValue = document.getElementById('opel-exhaust-system');
        const exsToyotaValue = document.getElementById('toyota-exhaust-system');


        if (resp.data.exhaust_system.Audi === undefined) {
            exsAudiValue.textContent = 0
        } else {
            exsAudiValue.textContent = resp.data.exhaust_system.Audi;
        };

        if (resp.data.exhaust_system.BMW === undefined) {
            exsBmwValue.textContent = 0
        } else {
            exsBmwValue.textContent = resp.data.exhaust_system.BMW;
        };

        if (resp.data.exhaust_system.Citroen === undefined) {
            exsCitroenValue.textContent = 0
        } else {
            exsCitroenValue.textContent = resp.data.exhaust_system.Citroen;
        };

        if (resp.data.exhaust_system.Fiat === undefined) {
            exsFiatValue.textContent = 0
        } else {
            exsFiatValue.textContent = resp.data.exhaust_system.Fiat;
        };

        if (resp.data.exhaust_system.Honda === undefined) {
            exsHondaValue.textContent = 0
        } else {
            exsHondaValue.textContent = resp.data.exhaust_system.Honda;
        };

        if (resp.data.exhaust_system.Nissan === undefined) {
            exsNissanValue.textContent = 0
        } else {
            exsNissanValue.textContent = resp.data.exhaust_system.Nissan;
        };

        if (resp.data.exhaust_system.Opel === undefined) {
            exsOpelValue.textContent = 0
        } else {
            exsOpelValue.textContent = resp.data.exhaust_system.Opel;
        };

        if (resp.data.exhaust_system.Toyota === undefined) {
            exsToyotaValue.textContent = 0
        } else {
            exsToyotaValue.textContent = resp.data.exhaust_system.Toyota;
        };


        //brake-system
        const bsAudiValue = document.getElementById('audi-brake-system');
        const bsBmwValue = document.getElementById('bmw-brake-system');
        const bsCitroenValue = document.getElementById('citroen-brake-system');
        const bsFiatValue = document.getElementById('fiat-brake-system');
        const bsHondaValue = document.getElementById('honda-brake-system');
        const bsNissanValue = document.getElementById('nissan-brake-system');
        const bsOpelValue = document.getElementById('opel-brake-system');
        const bsToyotaValue = document.getElementById('toyota-brake-system');

        if (resp.data.brake_system.Audi === undefined) {
            bsAudiValue.textContent = 0
        } else {
            bsAudiValue.textContent = resp.data.brake_system.Audi;
        };

        if (resp.data.brake_system.BMW === undefined) {
            bsBmwValue.textContent = 0
        } else {
            bsBmwValue.textContent = resp.data.brake_system.BMW;
        };

        if (resp.data.brake_system.Citroen === undefined) {
            bsCitroenValue.textContent = 0
        } else {
            bsCitroenValue.textContent = resp.data.brake_system.Citroen;
        };

        if (resp.data.brake_system.Fiat === undefined) {
            bsFiatValue.textContent = 0
        } else {
            bsFiatValue.textContent = resp.data.brake_system.Fiat;
        };

        if (resp.data.brake_system.Honda === undefined) {
            bsHondaValue.textContent = 0
        } else {
            bsHondaValue.textContent = resp.data.brake_system.Honda;
        };

        if (resp.data.brake_system.Nissan === undefined) {
            bsNissanValue.textContent = 0
        } else {
            bsNissanValue.textContent = resp.data.brake_system.Nissan;
        };

        if (resp.data.brake_system.Opel === undefined) {
            bsOpelValue.textContent = 0
        } else {
            bsOpelValue.textContent = resp.data.brake_system.Opel;
        };

        if (resp.data.brake_system.Toyota === undefined) {
            bsToyotaValue.textContent = 0
        } else {
            bsToyotaValue.textContent = resp.data.brake_system.Toyota;
        };



        //electrical-system
        const elsAudiValue = document.getElementById('audi-electrical-system');
        const elsBmwValue = document.getElementById('bmw-electrical-system');
        const elsCitroenValue = document.getElementById('citroen-electrical-system');
        const elsFiatValue = document.getElementById('fiat-electrical-system');
        const elsHondaValue = document.getElementById('honda-electrical-system');
        const elsNissanValue = document.getElementById('nissan-electrical-system');
        const elsOpelValue = document.getElementById('opel-electrical-system');
        const elsToyotaValue = document.getElementById('toyota-electrical-system');

        if (resp.data.electrical_system.Audi === undefined) {
            elsAudiValue.textContent = 0
        } else {
            elsAudiValue.textContent = resp.data.electrical_system.Audi;
        };

        if (resp.data.electrical_system.BMW === undefined) {
            elsBmwValue.textContent = 0
        } else {
            elsBmwValue.textContent = resp.data.electrical_system.BMW;
        };

        if (resp.data.electrical_system.Citroen === undefined) {
            elsCitroenValue.textContent = 0
        } else {
            elsCitroenValue.textContent = resp.data.electrical_system.Citroen;
        };

        if (resp.data.electrical_system.Fiat === undefined) {
            elsFiatValue.textContent = 0
        } else {
            elsFiatValue.textContent = resp.data.electrical_system.Fiat;
        };

        if (resp.data.electrical_system.Honda === undefined) {
            elsHondaValue.textContent = 0
        } else {
            elsHondaValue.textContent = resp.data.electrical_system.Honda;
        };

        if (resp.data.electrical_system.Nissan === undefined) {
            elsNissanValue.textContent = 0
        } else {
            elsNissanValue.textContent = resp.data.electrical_system.Nissan;
        };

        if (resp.data.electrical_system.Opel === undefined) {
            elsOpelValue.textContent = 0
        } else {
            elsOpelValue.textContent = resp.data.electrical_system.Opel;
        };

        if (resp.data.electrical_system.Toyota === undefined) {
            elsToyotaValue.textContent = 0
        } else {
            elsToyotaValue.textContent = resp.data.electrical_system.Toyota;
        };

        //engine
        const engineAudiValue = document.getElementById('audi-engine');
        const engineBmwValue = document.getElementById('bmw-engine');
        const engineCitroenValue = document.getElementById('citroen-engine');
        const engineFiatValue = document.getElementById('fiat-engine');
        const engineHondaValue = document.getElementById('honda-engine');
        const engineNissanValue = document.getElementById('nissan-engine');
        const engineOpelValue = document.getElementById('opel-engine');
        const engineToyotaValue = document.getElementById('toyota-engine');

        if (resp.data.engine.Audi === undefined) {
            engineAudiValue.textContent = 0
        } else {
            engineAudiValue.textContent = resp.data.engine.Audi;
        };

        if (resp.data.engine.BMW === undefined) {
            engineBmwValue.textContent = 0
        } else {
            engineBmwValue.textContent = resp.data.engine.BMW;
        };

        if (resp.data.engine.Citroen === undefined) {
            engineCitroenValue.textContent = 0
        } else {
            engineCitroenValue.textContent = resp.data.engine.Citroen;
        };

        if (resp.data.engine.Fiat === undefined) {
            engineFiatValue.textContent = 0
        } else {
            engineFiatValue.textContent = resp.data.engine.Fiat;
        };

        if (resp.data.engine.Fiat === undefined) {
            engineFiatValue.textContent = 0
        } else {
            engineFiatValue.textContent = resp.data.engine.Fiat;
        };

        if (resp.data.engine.Honda === undefined) {
            engineHondaValue.textContent = 0
        } else {
            engineHondaValue.textContent = resp.data.engine.Honda;
        };

        if (resp.data.engine.Nissan === undefined) {
            engineNissanValue.textContent = 0
        } else {
            engineNissanValue.textContent = resp.data.engine.Nissan;
        };

        if (resp.data.engine.Opel === undefined) {
            engineOpelValue.textContent = 0
        } else {
            engineOpelValue.textContent = resp.data.engine.Opel;
        };

        if (resp.data.engine.Toyota === undefined) {
            engineToyotaValue.textContent = 0
        } else {
            engineToyotaValue.textContent = resp.data.engine.Toyota;
        };

        //body
        const bodyAudiValue = document.getElementById('audi-body');
        const bodyBmwValue = document.getElementById('bmw-body');
        const bodyCitroenValue = document.getElementById('citroen-body');
        const bodyFiatValue = document.getElementById('fiat-body');
        const bodyHondaValue = document.getElementById('honda-body');
        const bodyNissanValue = document.getElementById('nissan-body');
        const bodyOpelValue = document.getElementById('opel-body');
        const bodyToyotaValue = document.getElementById('toyota-body');

        if (resp.data.body.Audi === undefined) {
            bodyAudiValue.textContent = 0
        } else {
            bodyAudiValue.textContent = resp.data.body.Audi;
        };

        if (resp.data.body.BMW === undefined) {
            bodyBmwValue.textContent = 0
        } else {
            bodyBmwValue.textContent = resp.data.body.BMW;
        };

        if (resp.data.body.Citroen === undefined) {
            bodyCitroenValue.textContent = 0
        } else {
            bodyCitroenValue.textContent = resp.data.body.Citroen;
        };

        if (resp.data.body.Fiat === undefined) {
            bodyFiatValue.textContent = 0
        } else {
            bodyFiatValue.textContent = resp.data.body.Fiat;
        };

        if (resp.data.body.Honda === undefined) {
            bodyHondaValue.textContent = 0
        } else {
            bodyHondaValue.textContent = resp.data.body.Honda;
        };

        if (resp.data.body.Nissan === undefined) {
            bodyNissanValue.textContent = 0
        } else {
            bodyNissanValue.textContent = resp.data.body.Nissan;
        };

        if (resp.data.body.Opel === undefined) {
            bodyOpelValue.textContent = 0
        } else {
            bodyOpelValue.textContent = resp.data.body.Opel;
        };

        if (resp.data.body.Toyota === undefined) {
            bodyToyotaValue.textContent = 0
        } else {
            bodyToyotaValue.textContent = resp.data.body.Toyota;
        };

        //suspension
        const susAudiValue = document.getElementById('audi-suspension');
        const susBmwValue = document.getElementById('bmw-suspension');
        const susCitroenValue = document.getElementById('citroen-suspension');
        const susFiatValue = document.getElementById('fiat-suspension');
        const susHondaValue = document.getElementById('honda-suspension');
        const susNissanValue = document.getElementById('nissan-suspension');
        const susOpelValue = document.getElementById('opel-suspension');
        const susToyotaValue = document.getElementById('toyota-suspension');

        if (resp.data.suspension.Audi === undefined) {
            susAudiValue.textContent = 0
        } else {
            susAudiValue.textContent = resp.data.suspension.Audi;
        };

        if (resp.data.suspension.BMW === undefined) {
            susBmwValue.textContent = 0
        } else {
            susBmwValue.textContent = resp.data.suspension.BMW;
        };

        if (resp.data.suspension.Citroen === undefined) {
            susCitroenValue.textContent = 0
        } else {
            susCitroenValue.textContent = resp.data.suspension.Citroen;
        };

        if (resp.data.suspension.Fiat === undefined) {
            susFiatValue.textContent = 0
        } else {
            susFiatValue.textContent = resp.data.suspension.Fiat;
        };

        if (resp.data.suspension.Honda === undefined) {
            susHondaValue.textContent = 0
        } else {
            susHondaValue.textContent = resp.data.suspension.Honda;
        };

        if (resp.data.suspension.Nissan === undefined) {
            susNissanValue.textContent = 0
        } else {
            susNissanValue.textContent = resp.data.suspension.Nissan;
        };

        if (resp.data.suspension.Opel === undefined) {
            susOpelValue.textContent = 0
        } else {
            susOpelValue.textContent = resp.data.suspension.Opel;
        };

        if (resp.data.suspension.Toyota === undefined) {
            susToyotaValue.textContent = 0
        } else {
            susToyotaValue.textContent = resp.data.suspension.Toyota;
        };


        //total
        const totalAudiValue = document.getElementById('audi-total');
        const totalBmwValue = document.getElementById('bmw-total');
        const totalCitroenValue = document.getElementById('citroen-total');
        const totalFiatValue = document.getElementById('fiat-total');
        const totalHondaValue = document.getElementById('honda-total');
        const totalNissanValue = document.getElementById('nissan-total');
        const totalOpelValue = document.getElementById('opel-total');
        const totalToyotaValue = document.getElementById('toyota-total');

        totalAudiValue.textContent = parseInt(mAudiValue.textContent) + parseInt(csAudiValue.textContent) + parseInt(exsAudiValue.textContent) + parseInt(bsAudiValue.textContent) + parseInt(elsAudiValue.textContent) + parseInt(engineAudiValue.textContent) + parseInt(bodyAudiValue.textContent) + parseInt(susAudiValue.textContent);
        totalBmwValue.textContent = parseInt(mBmwValue.textContent) + parseInt(csBmwValue.textContent) + parseInt(exsBmwValue.textContent) + parseInt(bsBmwValue.textContent) + parseInt(elsBmwValue.textContent) + parseInt(engineBmwValue.textContent) + parseInt(bodyBmwValue.textContent) + parseInt(susBmwValue.textContent);
        totalCitroenValue.textContent = parseInt(mCitroenValue.textContent) + parseInt(csCitroenValue.textContent) + parseInt(exsCitroenValue.textContent) + parseInt(bsCitroenValue.textContent) + parseInt(elsCitroenValue.textContent) + parseInt(engineCitroenValue.textContent) + parseInt(bodyCitroenValue.textContent) + parseInt(susCitroenValue.textContent);
        totalFiatValue.textContent = parseInt(mFiatValue.textContent) + parseInt(csFiatValue.textContent) + parseInt(exsFiatValue.textContent) + parseInt(bsFiatValue.textContent) + parseInt(elsFiatValue.textContent) + parseInt(engineFiatValue.textContent) + parseInt(bodyFiatValue.textContent) + parseInt(susFiatValue.textContent);
        totalHondaValue.textContent = parseInt(mHondaValue.textContent) + parseInt(csHondaValue.textContent) + parseInt(exsHondaValue.textContent) + parseInt(bsHondaValue.textContent) + parseInt(elsHondaValue.textContent) + parseInt(engineHondaValue.textContent) + parseInt(bodyHondaValue.textContent) + parseInt(susHondaValue.textContent);
        totalNissanValue.textContent = parseInt(mNissanValue.textContent) + parseInt(csNissanValue.textContent) + parseInt(exsNissanValue.textContent) + parseInt(bsNissanValue.textContent) + parseInt(elsNissanValue.textContent) + parseInt(engineNissanValue.textContent) + parseInt(bodyNissanValue.textContent) + parseInt(susNissanValue.textContent);
        totalOpelValue.textContent = parseInt(mOpelValue.textContent) + parseInt(csOpelValue.textContent) + parseInt(exsOpelValue.textContent) + parseInt(bsOpelValue.textContent) + parseInt(elsOpelValue.textContent) + parseInt(engineOpelValue.textContent) + parseInt(bodyOpelValue.textContent) + parseInt(susOpelValue.textContent);
        totalToyotaValue.textContent = parseInt(mToyotaValue.textContent) + parseInt(csToyotaValue.textContent) + parseInt(exsToyotaValue.textContent) + parseInt(bsToyotaValue.textContent) + parseInt(elsToyotaValue.textContent) + parseInt(engineToyotaValue.textContent) + parseInt(bodyToyotaValue.textContent) + parseInt(susToyotaValue.textContent);


    }).catch(err => {
        // Handle Error Here
        console.error(err);
    });
}

showStats();
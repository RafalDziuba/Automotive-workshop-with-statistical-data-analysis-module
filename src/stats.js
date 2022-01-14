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

        if (resp.data.maintenance.Bmw === undefined) {
            mBmwValue.textContent = 0
        } else {
            mBmwValue.textContent = resp.data.maintenance.Bmw;
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
            csAudiValue.textContent = resp.data.cooling_system.Audi;
        };

        if (resp.data.cooling_system.Bmw === undefined) {
            csBmwValue.textContent = 0
        } else {
            csBmwValue.textContent = resp.data.cooling_system.Bmw;
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

        if (resp.data.exhaust_system.Bmw === undefined) {
            exsBmwValue.textContent = 0
        } else {
            exsBmwValue.textContent = resp.data.exhaust_system.Bmw;
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

        if (resp.data.brake_system.Bmw === undefined) {
            bsBmwValue.textContent = 0
        } else {
            bsBmwValue.textContent = resp.data.brake_system.Bmw;
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

        if (resp.data.electrical_system.Bmw === undefined) {
            elsBmwValue.textContent = 0
        } else {
            elsBmwValue.textContent = resp.data.electrical_system.Bmw;
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

        if (resp.data.engine.Bmw === undefined) {
            engineBmwValue.textContent = 0
        } else {
            engineBmwValue.textContent = resp.data.engine.Bmw;
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

        if (resp.data.body.Bmw === undefined) {
            bodyBmwValue.textContent = 0
        } else {
            bodyBmwValue.textContent = resp.data.body.Bmw;
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

        if (resp.data.suspension.Bmw === undefined) {
            susBmwValue.textContent = 0
        } else {
            susBmwValue.textContent = resp.data.suspension.Bmw;
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

        let allAudiRepairs = parseInt(mAudiValue.textContent) + parseInt(csAudiValue.textContent) + parseInt(exsAudiValue.textContent) + parseInt(bsAudiValue.textContent) + parseInt(elsAudiValue.textContent) + parseInt(engineAudiValue.textContent) + parseInt(bodyAudiValue.textContent) + parseInt(susAudiValue.textContent);
        let allBmwRepairs = parseInt(mBmwValue.textContent) + parseInt(csBmwValue.textContent) + parseInt(exsBmwValue.textContent) + parseInt(bsBmwValue.textContent) + parseInt(elsBmwValue.textContent) + parseInt(engineBmwValue.textContent) + parseInt(bodyBmwValue.textContent) + parseInt(susBmwValue.textContent);
        let allCitroenRepairs = parseInt(mCitroenValue.textContent) + parseInt(csCitroenValue.textContent) + parseInt(exsCitroenValue.textContent) + parseInt(bsCitroenValue.textContent) + parseInt(elsCitroenValue.textContent) + parseInt(engineCitroenValue.textContent) + parseInt(bodyCitroenValue.textContent) + parseInt(susCitroenValue.textContent);
        let allFiatRepairs = parseInt(mFiatValue.textContent) + parseInt(csFiatValue.textContent) + parseInt(exsFiatValue.textContent) + parseInt(bsFiatValue.textContent) + parseInt(elsFiatValue.textContent) + parseInt(engineFiatValue.textContent) + parseInt(bodyFiatValue.textContent) + parseInt(susFiatValue.textContent);
        let allHondaRepairs = parseInt(mHondaValue.textContent) + parseInt(csHondaValue.textContent) + parseInt(exsHondaValue.textContent) + parseInt(bsHondaValue.textContent) + parseInt(elsHondaValue.textContent) + parseInt(engineHondaValue.textContent) + parseInt(bodyHondaValue.textContent) + parseInt(susHondaValue.textContent);
        let allNissanRepairs = parseInt(mNissanValue.textContent) + parseInt(csNissanValue.textContent) + parseInt(exsNissanValue.textContent) + parseInt(bsNissanValue.textContent) + parseInt(elsNissanValue.textContent) + parseInt(engineNissanValue.textContent) + parseInt(bodyNissanValue.textContent) + parseInt(susNissanValue.textContent);
        let allOpelRepairs = parseInt(mOpelValue.textContent) + parseInt(csOpelValue.textContent) + parseInt(exsOpelValue.textContent) + parseInt(bsOpelValue.textContent) + parseInt(elsOpelValue.textContent) + parseInt(engineOpelValue.textContent) + parseInt(bodyOpelValue.textContent) + parseInt(susOpelValue.textContent);
        let allToyotaRepairs = parseInt(mToyotaValue.textContent) + parseInt(csToyotaValue.textContent) + parseInt(exsToyotaValue.textContent) + parseInt(bsToyotaValue.textContent) + parseInt(elsToyotaValue.textContent) + parseInt(engineToyotaValue.textContent) + parseInt(bodyToyotaValue.textContent) + parseInt(susToyotaValue.textContent);

        const r1c1 = document.getElementById('r1c1');
        const r1c2 = document.getElementById('r1c2');
        const r1c3 = document.getElementById('r1c3');
        const r1c4 = document.getElementById('r1c4');
        const r1c5 = document.getElementById('r1c5');
        const r1c6 = document.getElementById('r1c6');
        const r1c7 = document.getElementById('r1c7');
        const r1c8 = document.getElementById('r1c8');

        const r2c1 = document.getElementById('r2c1');
        const r2c2 = document.getElementById('r2c2');
        const r2c3 = document.getElementById('r2c3');
        const r2c4 = document.getElementById('r2c4');
        const r2c5 = document.getElementById('r2c5');
        const r2c6 = document.getElementById('r2c6');
        const r2c7 = document.getElementById('r2c7');
        const r2c8 = document.getElementById('r2c8');

        const r3c1 = document.getElementById('r3c1');
        const r3c2 = document.getElementById('r3c2');
        const r3c3 = document.getElementById('r3c3');
        const r3c4 = document.getElementById('r3c4');
        const r3c5 = document.getElementById('r3c5');
        const r3c6 = document.getElementById('r3c6');
        const r3c7 = document.getElementById('r3c7');
        const r3c8 = document.getElementById('r3c8');

        const r4c1 = document.getElementById('r4c1');
        const r4c2 = document.getElementById('r4c2');
        const r4c3 = document.getElementById('r4c3');
        const r4c4 = document.getElementById('r4c4');
        const r4c5 = document.getElementById('r4c5');
        const r4c6 = document.getElementById('r4c6');
        const r4c7 = document.getElementById('r4c7');
        const r4c8 = document.getElementById('r4c8');

        const r5c1 = document.getElementById('r5c1');
        const r5c2 = document.getElementById('r5c2');
        const r5c3 = document.getElementById('r5c3');
        const r5c4 = document.getElementById('r5c4');
        const r5c5 = document.getElementById('r5c5');
        const r5c6 = document.getElementById('r5c6');
        const r5c7 = document.getElementById('r5c7');
        const r5c8 = document.getElementById('r5c8');

        const r6c1 = document.getElementById('r6c1');
        const r6c2 = document.getElementById('r6c2');
        const r6c3 = document.getElementById('r6c3');
        const r6c4 = document.getElementById('r6c4');
        const r6c5 = document.getElementById('r6c5');
        const r6c6 = document.getElementById('r6c6');
        const r6c7 = document.getElementById('r6c7');
        const r6c8 = document.getElementById('r6c8');

        const r7c1 = document.getElementById('r7c1');
        const r7c2 = document.getElementById('r7c2');
        const r7c3 = document.getElementById('r7c3');
        const r7c4 = document.getElementById('r7c4');
        const r7c5 = document.getElementById('r7c5');
        const r7c6 = document.getElementById('r7c6');
        const r7c7 = document.getElementById('r7c7');
        const r7c8 = document.getElementById('r7c8');

        const r8c1 = document.getElementById('r8c1');
        const r8c2 = document.getElementById('r8c2');
        const r8c3 = document.getElementById('r8c3');
        const r8c4 = document.getElementById('r8c4');
        const r8c5 = document.getElementById('r8c5');
        const r8c6 = document.getElementById('r8c6');
        const r8c7 = document.getElementById('r8c7');
        const r8c8 = document.getElementById('r8c8');

        const r9c1 = document.getElementById('r9c1');
        const r9c2 = document.getElementById('r9c2');
        const r9c3 = document.getElementById('r9c3');
        const r9c4 = document.getElementById('r9c4');
        const r9c5 = document.getElementById('r9c5');
        const r9c6 = document.getElementById('r9c6');
        const r9c7 = document.getElementById('r9c7');
        const r9c8 = document.getElementById('r9c8');

        let allMaintenanceValue = parseInt(mAudiValue.textContent) + parseInt(mBmwValue.textContent) + parseInt(mCitroenValue.textContent) + parseInt(mFiatValue.textContent) + parseInt(mHondaValue.textContent) + parseInt(mNissanValue.textContent) + parseInt(mOpelValue.textContent) + parseInt(mToyotaValue.textContent);
        let allCsystemValue = parseInt(csAudiValue.textContent) + parseInt(csBmwValue.textContent) + parseInt(csCitroenValue.textContent) + parseInt(csFiatValue.textContent) + parseInt(csHondaValue.textContent) + parseInt(csNissanValue.textContent) + parseInt(csOpelValue.textContent) + parseInt(csToyotaValue.textContent);
        let allExsValue = parseInt(exsAudiValue.textContent) + parseInt(exsBmwValue.textContent) + parseInt(exsCitroenValue.textContent) + parseInt(exsFiatValue.textContent) + parseInt(exsHondaValue.textContent) + parseInt(exsNissanValue.textContent) + parseInt(exsOpelValue.textContent) + parseInt(exsToyotaValue.textContent);
        let allBsValue = parseInt(bsAudiValue.textContent) + parseInt(bsBmwValue.textContent) + parseInt(bsCitroenValue.textContent) + parseInt(bsFiatValue.textContent) + parseInt(bsHondaValue.textContent) + parseInt(bsNissanValue.textContent) + parseInt(bsOpelValue.textContent) + parseInt(bsToyotaValue.textContent);
        let allElsValue = parseInt(elsAudiValue.textContent) + parseInt(elsBmwValue.textContent) + parseInt(elsCitroenValue.textContent) + parseInt(elsFiatValue.textContent) + parseInt(elsHondaValue.textContent) + parseInt(elsNissanValue.textContent) + parseInt(elsOpelValue.textContent) + parseInt(elsToyotaValue.textContent);
        let allEngineValue = parseInt(engineAudiValue.textContent) + parseInt(engineBmwValue.textContent) + parseInt(engineCitroenValue.textContent) + parseInt(engineFiatValue.textContent) + parseInt(engineHondaValue.textContent) + parseInt(engineNissanValue.textContent) + parseInt(engineOpelValue.textContent) + parseInt(engineToyotaValue.textContent);
        let allBodyValue = parseInt(bodyAudiValue.textContent) + parseInt(bodyBmwValue.textContent) + parseInt(engineCitroenValue.textContent) + parseInt(bodyFiatValue.textContent) + parseInt(bodyHondaValue.textContent) + parseInt(bodyNissanValue.textContent) + parseInt(bodyOpelValue.textContent) + parseInt(bodyToyotaValue.textContent);
        let allSusValue = parseInt(susAudiValue.textContent) + parseInt(susBmwValue.textContent) + parseInt(susCitroenValue.textContent) + parseInt(susFiatValue.textContent) + parseInt(susHondaValue.textContent) + parseInt(susNissanValue.textContent) + parseInt(susOpelValue.textContent) + parseInt(susToyotaValue.textContent);

        totalAudiValue.textContent = allAudiRepairs;
        totalBmwValue.textContent = allBmwRepairs;
        totalCitroenValue.textContent = allCitroenRepairs;
        totalFiatValue.textContent = allFiatRepairs;
        totalHondaValue.textContent = allHondaRepairs;
        totalNissanValue.textContent = allNissanRepairs;
        totalOpelValue.textContent = allOpelRepairs;
        totalToyotaValue.textContent = allToyotaRepairs;

        let allCelsValue = allAudiRepairs + allBmwRepairs + allCitroenRepairs + allFiatRepairs + allHondaRepairs + allNissanRepairs + allOpelRepairs + allToyotaRepairs;

        console.log(allCelsValue)

        r1c1.textContent = ((allAudiRepairs * allMaintenanceValue) / allCelsValue).toFixed(2);
        r1c2.textContent = ((allBmwRepairs * allMaintenanceValue) / allCelsValue).toFixed(2);
        r1c3.textContent = ((allCitroenRepairs * allMaintenanceValue) / allCelsValue).toFixed(2);
        r1c4.textContent = ((allFiatRepairs * allMaintenanceValue) / allCelsValue).toFixed(2);
        r1c5.textContent = ((allHondaRepairs * allMaintenanceValue) / allCelsValue).toFixed(2);
        r1c6.textContent = ((allNissanRepairs * allMaintenanceValue) / allCelsValue).toFixed(2);
        r1c7.textContent = ((allOpelRepairs * allMaintenanceValue) / allCelsValue).toFixed(2);
        r1c8.textContent = ((allToyotaRepairs * allMaintenanceValue) / allCelsValue).toFixed(2);

        r2c1.textContent = ((allAudiRepairs * allCsystemValue) / allCelsValue).toFixed(2);
        r2c2.textContent = ((allBmwRepairs * allCsystemValue) / allCelsValue).toFixed(2);
        r2c3.textContent = ((allCitroenRepairs * allCsystemValue) / allCelsValue).toFixed(2);
        r2c4.textContent = ((allFiatRepairs * allCsystemValue) / allCelsValue).toFixed(2);
        r2c5.textContent = ((allHondaRepairs * allCsystemValue) / allCelsValue).toFixed(2);
        r2c6.textContent = ((allNissanRepairs * allCsystemValue) / allCelsValue).toFixed(2);
        r2c7.textContent = ((allOpelRepairs * allCsystemValue) / allCelsValue).toFixed(2);
        r2c8.textContent = ((allToyotaRepairs * allCsystemValue) / allCelsValue).toFixed(2);

        r3c1.textContent = ((allAudiRepairs * allExsValue) / allCelsValue).toFixed(2);
        r3c2.textContent = ((allBmwRepairs * allExsValue) / allCelsValue).toFixed(2);
        r3c3.textContent = ((allCitroenRepairs * allExsValue) / allCelsValue).toFixed(2);
        r3c4.textContent = ((allFiatRepairs * allExsValue) / allCelsValue).toFixed(2);
        r3c5.textContent = ((allHondaRepairs * allExsValue) / allCelsValue).toFixed(2);
        r3c6.textContent = ((allNissanRepairs * allExsValue) / allCelsValue).toFixed(2);
        r3c7.textContent = ((allOpelRepairs * allExsValue) / allCelsValue).toFixed(2);
        r3c8.textContent = ((allToyotaRepairs * allExsValue) / allCelsValue).toFixed(2);

        r4c1.textContent = ((allAudiRepairs * allBsValue) / allCelsValue).toFixed(2);
        r4c2.textContent = ((allBmwRepairs * allBsValue) / allCelsValue).toFixed(2);
        r4c3.textContent = ((allCitroenRepairs * allBsValue) / allCelsValue).toFixed(2);
        r4c4.textContent = ((allFiatRepairs * allBsValue) / allCelsValue).toFixed(2);
        r4c5.textContent = ((allHondaRepairs * allBsValue) / allCelsValue).toFixed(2);
        r4c6.textContent = ((allNissanRepairs * allBsValue) / allCelsValue).toFixed(2);
        r4c7.textContent = ((allOpelRepairs * allBsValue) / allCelsValue).toFixed(2);
        r4c8.textContent = ((allToyotaRepairs * allBsValue) / allCelsValue).toFixed(2);

        r5c1.textContent = ((allAudiRepairs * allElsValue) / allCelsValue).toFixed(2);
        r5c2.textContent = ((allBmwRepairs * allElsValue) / allCelsValue).toFixed(2);
        r5c3.textContent = ((allCitroenRepairs * allElsValue) / allCelsValue).toFixed(2);
        r5c4.textContent = ((allFiatRepairs * allElsValue) / allCelsValue).toFixed(2);
        r5c5.textContent = ((allHondaRepairs * allElsValue) / allCelsValue).toFixed(2);
        r5c6.textContent = ((allNissanRepairs * allElsValue) / allCelsValue).toFixed(2);
        r5c7.textContent = ((allOpelRepairs * allElsValue) / allCelsValue).toFixed(2);
        r5c8.textContent = ((allToyotaRepairs * allElsValue) / allCelsValue).toFixed(2);

        r6c1.textContent = ((allAudiRepairs * allEngineValue) / allCelsValue).toFixed(2);
        r6c2.textContent = ((allBmwRepairs * allEngineValue) / allCelsValue).toFixed(2);
        r6c3.textContent = ((allCitroenRepairs * allEngineValue) / allCelsValue).toFixed(2);
        r6c4.textContent = ((allFiatRepairs * allEngineValue) / allCelsValue).toFixed(2);
        r6c5.textContent = ((allHondaRepairs * allEngineValue) / allCelsValue).toFixed(2);
        r6c6.textContent = ((allNissanRepairs * allEngineValue) / allCelsValue).toFixed(2);
        r6c7.textContent = ((allOpelRepairs * allEngineValue) / allCelsValue).toFixed(2);
        r6c8.textContent = ((allToyotaRepairs * allEngineValue) / allCelsValue).toFixed(2);

        r7c1.textContent = ((allAudiRepairs * allBodyValue) / allCelsValue).toFixed(2);
        r7c2.textContent = ((allBmwRepairs * allBodyValue) / allCelsValue).toFixed(2);
        r7c3.textContent = ((allCitroenRepairs * allBodyValue) / allCelsValue).toFixed(2);
        r7c4.textContent = ((allFiatRepairs * allBodyValue) / allCelsValue).toFixed(2);
        r7c5.textContent = ((allHondaRepairs * allBodyValue) / allCelsValue).toFixed(2);
        r7c6.textContent = ((allNissanRepairs * allBodyValue) / allCelsValue).toFixed(2);
        r7c7.textContent = ((allOpelRepairs * allBodyValue) / allCelsValue).toFixed(2);
        r7c8.textContent = ((allToyotaRepairs * allBodyValue) / allCelsValue).toFixed(2);

        r8c1.textContent = ((allAudiRepairs * allSusValue) / allCelsValue).toFixed(2);
        r8c2.textContent = ((allBmwRepairs * allSusValue) / allCelsValue).toFixed(2);
        r8c3.textContent = ((allCitroenRepairs * allSusValue) / allCelsValue).toFixed(2);
        r8c4.textContent = ((allFiatRepairs * allSusValue) / allCelsValue).toFixed(2);
        r8c5.textContent = ((allHondaRepairs * allSusValue) / allCelsValue).toFixed(2);
        r8c6.textContent = ((allNissanRepairs * allSusValue) / allCelsValue).toFixed(2);
        r8c7.textContent = ((allOpelRepairs * allSusValue) / allCelsValue).toFixed(2);
        r8c8.textContent = ((allToyotaRepairs * allSusValue) / allCelsValue).toFixed(2);


        const tab2Value = document.querySelectorAll('.t2')

        // for (let i = 0; i < tab2Value.length; i++){
        //     parseInt(tab2Value[i].textContent).toFixed(2);
        // }

        const tab3Value = document.querySelectorAll('.t3')
        // let newArr = Array.from(tab2Value)


        const tab1Value = document.querySelectorAll('.t1')
        const sumArr = [];

        for (let i = 0; i < tab2Value.length; i++) {
            sumArr.push(((tab1Value[i].textContent - tab2Value[i].textContent) * (tab1Value[i].textContent - tab2Value[i].textContent) / tab2Value[i].textContent).toFixed(2));
        }
        // console.log(sumArr)

        for (let i = 0; i < tab2Value.length; i++) {
            tab3Value[i].textContent = sumArr[i];
        }

        const chi2 = document.getElementById('chi2-value');
    //    const res =  sumArr.map(function(x){
    //         return parseInt(x, 10);
    //     });
    //     console.log(res)
    // for ( let i = 0; i < tab3Value.length; i++){
    //     console.log(parseFloat(tab3Value[i].textContent, 8))
    // }
        const chi2Value = sumArr.reduce(function(acc, val){return parseFloat(acc, 16) + parseFloat(val, 16);}, 0);

        
        chi2.textContent = chi2Value.toFixed(2);
        // console.log(chi2Value)

        // console.log(tab1Value)

        // const tab2Parsed = newArr.map(x.textContent => parseInt(x));
        // console.log(tab2Parsed);


        // t3r1c1.textContent = mAudiValue.textContent - r1c1.textContent


    }).catch(err => {

        console.error(err);
    });
}

showStats();
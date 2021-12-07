import { DataRequest } from './data.request';

describe('DataRequest', () => {
    const Data = new DataRequest();

    it('should create an instance', () => {
        expect(new DataRequest()).toBeTruthy();
    });

    it('orgName is accessible', () => {
        expect(Data.orgName).toEqual('');
        Data.orgName = 'TestName';
        expect(Data.orgName).toEqual('TestName');
    });

    it('orgCity is accessible', () => {
        expect(Data.orgCity).toEqual('');
        Data.orgCity = 'TestCity';
        expect(Data.orgCity).toEqual('TestCity');
    });

    it('orgAddress is accessible', () => {
        expect(Data.orgAddress).toEqual('');
        Data.orgAddress = 'TestAddress';
        expect(Data.orgAddress).toEqual('TestAddress');
    });

    it('person is accessible', () => {
        expect(Data.person).toEqual('');
        Data.person = 'TestPerson';
        expect(Data.person).toEqual('TestPerson');
    });

    it('phone is accessible', () => {
        expect(Data.phone).toEqual('');
        Data.phone = 'TestPhone';
        expect(Data.phone).toEqual('TestPhone');
    });

    it('email is accessible', () => {
        expect(Data.email).toEqual('');
        Data.email = 'TestEmail';
        expect(Data.email).toEqual('TestEmail');
    });

    it('objName is accessible', () => {
        expect(Data.objName).toEqual('');
        Data.objName = 'TestObjName';
        expect(Data.objName).toEqual('TestObjName');
    });

    it('objField is chose', () => {
        expect(Data.objField).toHaveBeenCalled
    })
});
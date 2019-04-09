const Repository = require('./JetpackRepository');
const Jetpack = require('../Entity/Jetpack');

describe('Find All', function () {

    test('Test FindAll', () => {
        let dbMock = {
            get : jest.fn(),
            value : jest.fn()
        };
        const jetpack = new Jetpack();
        jetpack.id=1;
        jetpack.name = "test";
        jetpack.image ="123";
        dbMock.get.mockReturnValue(dbMock);
        dbMock.value.mockReturnValue([jetpack]);

        const repository = new Repository(dbMock);
        jetpacks = repository.findAll();
        expect(jetpacks.length).toBe(1);
        expect(jetpacks[0].name).toBe("test");
        expect(jetpacks[0].image).toBe("123");
    });
});

describe('create jetpack', function () {

    test('Test create', () => {
        let dbMock = {
            get : jest.fn(),
            push : jest.fn(),
            write : jest.fn()
        };
        const jetpack = new Jetpack();
        jetpack.id=1;
        jetpack.name = "test";
        jetpack.image ="123";

        dbMock.get.mockReturnValue(dbMock);
        dbMock.push.mockReturnValue(dbMock);
        dbMock.write.mockReturnValue(dbMock);

        const repository = new Repository(dbMock);
        repository.create(jetpack);
        expect(dbMock.write.mock.calls.length).toBe(1);
        expect(()=> (repository.create(new Jetpack()))).toThrow('Jetpack object is missing information');
        expect(()=> (repository.create(undefined))).toThrow('Jetpack object is undefined');
    });
});
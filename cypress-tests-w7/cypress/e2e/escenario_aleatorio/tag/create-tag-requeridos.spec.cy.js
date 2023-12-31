import TagNewPage from '../../page-object/TagNewPage';
import TagListPage from '../../page-object/TagListPage';
import TagEditPage from '../../page-object/TagEditPage';
import { faker } from '@faker-js/faker';

describe('Gestión de Tags - Crear Tag Con datos inválidos y requeridos', function() {
    const tagListPage = new TagListPage();
    const tagNewPage = new TagNewPage();
    const tagEditPage = new TagEditPage();

    it.only('Crear Tag con parámetros invalidos y requeridos', () => {
        tagNewPage.visit();
        tagListPage.navigateToNewTagPage();

        let tagData = {
            name: ' ',
            color: faker.lorem.words(1),
            slug: faker.helpers.slugify(faker.lorem.words(2).toLowerCase()),
            description: `<script>${faker.lorem.paragraphs()}</script>`,
            image: {name: 'example.json', type: 'application/json'}
        };

        // Crear un nuevo tag
        tagNewPage.createTag(tagData);
        cy.wait(1000); //Mienrtas la imagen es subida

        //Guardar datos inválidos del nuevo tag
        tagNewPage.saveCreateTag();

        //Revisar validaciones son correctas
        let invalidMessages = [
            'You must specify a name for the tag.',
            'The colour should be in valid hex format'
        ]
        tagNewPage.invalidTagData(invalidMessages);


        // Ajustar datos
        tagData.name = faker.lorem.words(2);
        tagData.color = faker.internet.color().slice(1);
        tagData.slug = faker.helpers.slugify(faker.lorem.words(2).toLowerCase());
        tagData.description = faker.lorem.words(5);
        tagData.image = {name: 'tigre-test.jpg', type: 'image/jpeg'};
        tagNewPage.clearFields();
        tagNewPage.createTag(tagData);
        cy.wait(1000); //Mienrtas la imagen es subida

        //Guardar datos válidos del nuevo tag
        tagNewPage.saveCreateTag();

        //Una vez el tag creado, debe existir la opción para borrarlo
        tagNewPage.newTagCanBeDeleted();

        // Ir a lista de tags
        tagListPage.visit();

        //El tag existe en la lista de tags
        tagListPage.tagExists(tagData);

        //Ir al modo edición y verificar que la imagen subida es correcta
        tagListPage.navigateToEditTag(tagData);
        tagEditPage.imageExists(tagData);
    });
});
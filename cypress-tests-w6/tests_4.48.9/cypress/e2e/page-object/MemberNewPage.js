import {environment} from '../environments/environment';
import { closeWarningOldVersion } from '../utilities';


//Clase para facilitar navegación de página de miembros de la aplicación
class MemberNewPage {

    //Ir a página de creación de miembros
    visit() {
        cy.visit(environment.baseUrl + 'members/new');
        cy.wait(3000);
        closeWarningOldVersion();
        cy.ghostscreenshot('visit member new page');
        
    }

    //Ir a página de edicion de miembros
    visitEdit(nameMember) {
        cy.get('.gh-members-list-name').contains(nameMember,{force:true})
        .parent()
        .parent()
        .click({force:true})
        cy.wait(2000)
        
    }

    //Editar campos de Miembro
    editName(name){
        cy.get('input[id="member-name"]').clear().type(name,{force: true}) 
    }
    editEmail(email){
        cy.get('input[id="member-email"]').clear().type(email,{force: true}) 
    }
    editLabels(labels){
        cy.get('.gh-member-label-input').then(($ele) => {
            if ($ele.find('[aria-label="remove element"]').length > 0) {
                cy.get('[aria-label="remove element"]').click()
            } 
            cy.get('.ember-power-select-trigger-multiple-input')
            .type(labels+'{enter}',{force: true}) 
        })
        
    }
    editNote(note){
        cy.get('textarea[name="note"]').clear({force: true}).type(note,{force: true}) 
    }

    //Llenar formato Miembro
    createMember(name,email,labels,note){
        this.editName(name)
        this.editEmail(email)
        this.editLabels(labels)
        this.editNote(note)

    }

    //Obtener información del miembro
    getName(){
        return cy.get('input[id="member-name"]').invoke('val')
    }

    getEmail(){
        return cy.get('input[id="member-email"]').invoke('val')
    }

    containsLabels(label){
        return cy.get('[title="Label"]').contains(label)
    }

    getNote(){
        return cy.get('textarea[name="note"]').invoke('val')
    }

    //Guardar Miembro
    saveMember(){
        cy.get('.view-actions')
            .contains('Save').parent().click();
            cy.wait(1000)
    }

    //Borrar Miembro
    deleteMember(){
        cy.get('.gh-btn-action-icon').click();
        cy.wait(1000);
        cy.get('.gh-member-actions-menu')
                .contains('Delete member').parent().click();
        cy.wait(1000);
        cy.get('.modal-footer')
                    .contains('Delete').click({force: true});
                    cy.wait(2000)
        cy.wait(1000);
        
    }


    

}

export default MemberNewPage;
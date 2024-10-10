describe('Administrador', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:5173/')
  })

  it("Inicio de sesion y cierre de sesion", ()=>{
    cy.get('._buttonInvert_gtnxa_11').click()
    cy.get('#email').type("administrador@mail.com")
    cy.get('#password').type("ASDasd1234")
    cy.get('._butttonDefault_gtnxa_1').click()
    cy.get('.swal2-confirm').click()
    cy.get('[button-menu-id="menu"]').click()
    cy.get('[button-logout-id="logout"]').click()
  })
  it("Navegacion en diferentes opciones del nav", ()=>{
    cy.get('._buttonInvert_gtnxa_11').click()
    cy.get('#email').type("administrador@mail.com")
    cy.get('#password').type("ASDasd1234")
    cy.get('._butttonDefault_gtnxa_1').click()
    cy.get('.swal2-confirm').click()
    cy.get('[button-menu-id="menu"]').click()
    cy.get('[button-dashboard-id="dashboard"]').click()
    cy.get('[button-menu-id="menu"]').click()
    cy.get('[button-newCarrer-id="newCarrer"]').click()
    cy.get('[button-menu-id="menu"]').click()
    cy.get('[button-newCompanie-id="newCompanie"]').click()
    cy.get('[button-menu-id="menu"]').click()
    cy.get('[button-newPublish-id="newPublish"]').click()
  })

  it("Revision del Dashboard", ()=>{
      cy.get('._buttonInvert_gtnxa_11').click()
      cy.get('#email').type("administrador@mail.com")
      cy.get('#password').type("ASDasd1234")
      cy.get('._butttonDefault_gtnxa_1').click()
      cy.get('.swal2-confirm').click()
      cy.get('[button-menu-id="menu"]').click()
      cy.get('[button-dashboard-id="dashboard"]').click()
    })

  it("Inicio de sesion y cierre de sesion", ()=>{
      cy.get('._buttonInvert_gtnxa_11').click()
      cy.get('#email').type("administrador@mail.com")
      cy.get('#password').type("ASDasd1234")
      cy.get('._butttonDefault_gtnxa_1').click()
      cy.get('.swal2-confirm').click()
      cy.get('[button-menu-id="menu"]').click()
      cy.get('[button-newCompanie-id="newCompanie"]').click()
      cy.get('#name').type("Nombre de la empresa")
      cy.get('#description').type("descripcion de la empresa")
      // cy.get('#email').type("administrador@mail.com")
      // cy.get('#duration').type("administrador@mail.com")
    })

  // it("Encuentra el Titulo de la pagina", ()=>{
  //     cy.get("h1").contains("Pasantías")
  //     cy.get("#imageHero")
  //     cy.get('._butttonDefault_gtnxa_1').click()
  //   })
  
  //   it("Existe Carrousel", ()=>{
  //     cy.get('#carrousel')
  //   })
  
  //   it("Existen Objetivos", ()=>{
  //     cy.get('#objetivos')
  //     cy.get('#imageObjetivos')
  //     cy.get('#herramientas')
  //     cy.get('#compass')
  //     cy.get('#arrow')
  //     cy.get('#diagrama')
  //     cy.get("h4").contains("Experiencia")
  //     cy.get("h4").contains("Mentoría")
  //     cy.get("h4").contains("Desarrollo")
  //     cy.get("h4").contains("Oportunidades")
  //   })
  
  //   it("Existe una card", ()=>{
  //     cy.get("h5").contains("Nuestras pasantías")
  //     cy.get('._card_dbile_32 > .flex > :nth-child(1)')
  //   })
  
  //   it("Existen Testimonios", ()=>{
  //     cy.get("h5").contains("Testimonios de nuestros alumnos")
  //     cy.get("#cardTestimonial")
  //     cy.get("#imageTestimonial")
  //     cy.get('._card_dbile_32 > .flex > :nth-child(1)')
  //   })
  
  //   it("Existen Cedes", ()=>{
  //     cy.get("#cedes")
  //     cy.get("h2").contains("Sede Central UNSTA")
  //     cy.get("h2").contains("Campus UNSTA Yerba Buena")
  //     cy.get("h2").contains("Campus UNSTA Concepción")
  //   })
  //   it("Existe un Footer", ()=>{
  //     cy.get("span").contains("UNSTA")
  //     cy.get("p").contains("Unsta")
  //     cy.get("#facebook")
  //     cy.get("#x")
  //     cy.get("#instagram")
  //     cy.get("#linkedin")
  //     cy.get('._card_dbile_32 > .flex > :nth-child(1)')
  //   })
})
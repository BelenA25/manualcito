const libros = [
    {
      titulo: "Harry Potter y la piedra filosofal",
      imagen:
        "https://images.cdn2.buscalibre.com/fit-in/360x360/e5/c9/e5c9dea6fac79b350e635ddd393bedfa.jpg",
      enlace:
        "https://www.google.com/search?q=harry+potter+y+la+piedra+filosofal+libro&oq=harry+potter+y+la+piedra&aqs=chrome.0.69i59j69i57j46i512j0i20i263i512j0i512l2j46i512j0i512l3.20024j0j7&sourceid=chrome&ie=UTF-8",
    },
    {
      titulo: "Harry Potter y la camara sereta",
      imagen:
        "https://solo-libros.com/wp-content/uploads/2021/10/81lbWemxWL.jpg",
      enlace:
        "https://www.google.com/search?q=harry+potter+y+el+prisionero+de+azkaban+libro&sxsrf=ALiCzsbHTnSiLBQjkq3k-_lQLvo_JNlkmw%3A1664743719806&ei=J_k5Y-rwMLTu1sQP6OK3gA0&ved=0ahUKEwiqoL7QtcL6AhU0t5UCHWjxDdAQ4dUDCA4&uact=5&oq=harry+potter+y+el+prisionero+de+azkaban+libro&gs_lcp=Cgdnd3Mtd2l6EAMyBQguEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMggIABCABBDJAzIFCAAQgAQyBQgAEIAEOgoIABBHENYEELADOgcIABCwAxBDOg0IABDkAhDWBBCwAxgBOg8ILhDUAhDIAxCwAxBDGAI6DAguEMgDELADEEMYAjoICC4QgAQQ1AI6CgguEIAEEIcCEBRKBAhBGABKBAhGGAFQsARYvxtghh9oAXABeACAAZ8BiAHuDJIBBDAuMTGYAQCgAQHIARDAAQHaAQYIARABGAnaAQYIAhABGAg&sclient=gws-wiz",
    },
    {
      titulo: "Harry Potter y el prisionero de azkaban",
      imagen:
        "https://tercerafundacion.net/imagenes/portada/P-00067943.jpg",
      enlace:
        "https://www.google.com/search?q=harry+potter+y+el+prisionero+de+azkaban+libro&sxsrf=ALiCzsbHTnSiLBQjkq3k-_lQLvo_JNlkmw%3A1664743719806&ei=J_k5Y-rwMLTu1sQP6OK3gA0&ved=0ahUKEwiqoL7QtcL6AhU0t5UCHWjxDdAQ4dUDCA4&uact=5&oq=harry+potter+y+el+prisionero+de+azkaban+libro&gs_lcp=Cgdnd3Mtd2l6EAMyBQguEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMggIABCABBDJAzIFCAAQgAQyBQgAEIAEOgoIABBHENYEELADOgcIABCwAxBDOg0IABDkAhDWBBCwAxgBOg8ILhDUAhDIAxCwAxBDGAI6DAguEMgDELADEEMYAjoICC4QgAQQ1AI6CgguEIAEEIcCEBRKBAhBGABKBAhGGAFQsARYvxtghh9oAXABeACAAZ8BiAHuDJIBBDAuMTGYAQCgAQHIARDAAQHaAQYIARABGAnaAQYIAhABGAg&sclient=gws-wiz",
    },
    {
      titulo: "Harry Potter y el caliz del fuego",
      imagen:
        "https://www.pasajeslibros.com/static/img/portadas/_visd_0001JPG0J11Q.jpg",
      enlace:
        "https://www.google.com/search?q=harry+potter+y+el+caliz+de+fuego+libro&sxsrf=ALiCzsbDI7vHZLlGmD18zrPCZ_QIcIDS2w%3A1664743785725&ei=afk5Y9vnK9eG1sQPsM-xiAc&ved=0ahUKEwibwPXvtcL6AhVXg5UCHbBnDHEQ4dUDCA4&uact=5&oq=harry+potter+y+el+caliz+de+fuego+libro&gs_lcp=Cgdnd3Mtd2l6EAMyBQguEIAEMggIABCABBDJAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgoIABBHENYEELADOgcIABCwAxBDOg0IABDkAhDWBBCwAxgBOg8ILhDUAhDIAxCwAxBDGAI6DAguEMgDELADEEMYAjoGCAAQHhAHSgQIQRgASgQIRhgBUIALWPkpYOouaAFwAXgBgAGnAYgBuw2SAQQxLjExmAEAoAEByAERwAEB2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz",
    },
    {
      titulo: "Harry Potter y la orden del fenix",
      imagen:
        "https://images-na.ssl-images-amazon.com/images/I/81-XD0DJiKL.jpg",
      enlace:
        "https://www.google.com/search?q=harry+potter+y+la+orden+del+f%C3%A9nix+libro&sxsrf=ALiCzsYxO2I0XabzpXJfRrtZVwNAwb1E9Q%3A1664743858857&ei=svk5Y6fyM9Tx1sQP3rWt8AE&oq=harry+potter+y+la+or+libro&gs_lcp=Cgdnd3Mtd2l6EAMYADIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHOgoIABBHENYEELADOgcIABCwAxBDOg0IABDkAhDWBBCwAxgBOg8ILhDUAhDIAxCwAxBDGAI6DAguEMgDELADEEMYAkoECEEYAEoECEYYAVDRFVj5GGC3H2gCcAF4AIABmAGIAeMFkgEDMC41mAEAoAEByAESwAEB2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz",
    },
    {
      titulo: "Harry Potter y el misterio del principe mestizo",
      imagen:
        "https://www.estudioenescarlata.com/media/img/portadas/_visd_0001JPG01LYM.jpg",
      enlace:
        "https://www.google.com/search?q=harry+potter+y+el+misterio+del+pr%C3%ADncipe+libro&sxsrf=ALiCzsb2OJqV6k_fFFQVVpsVfIHto4QgdA%3A1664743895254&ei=1_k5Y8uBD5yG1sQPh-CzsAU&oq=harry+potter+y+el+mi+libro&gs_lcp=Cgdnd3Mtd2l6EAMYADIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHOgoIABBHENYEELADOg0IABBHENYEELADEMkDOgcIABCwAxBDOg0IABDkAhDWBBCwAxgBOg8ILhDUAhDIAxCwAxBDGAI6DAguEMgDELADEEMYAjoICAAQHhAHEAo6CgghEMMEEAoQoAFKBAhBGABKBAhGGAFQsxJYjytgjTVoBXABeACAAaYBiAHKCZIBAzAuOJgBAKABAcgBEMABAdoBBggBEAEYCdoBBggCEAEYCA&sclient=gws-wiz",
    },
    {
      titulo: "Harry Potter y las reliquias de la muerte",
      imagen:
        "https://www.pasajeslibros.com/static/img/portadas/_visd_0001JPG0K0UN.jpg",
      enlace:
        "https://www.google.com/search?q=harry+potter+y+las+reliquias+de+la+muerte+libro&sxsrf=ALiCzsb45hoJUURVk_khd6YlkjVzbzgSuA%3A1664743939735&ei=A_o5Y4GuLL3W1sQPwvitEA&oq=harry+potter+y+las+reli+libro&gs_lcp=Cgdnd3Mtd2l6EAMYADIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHOgoIABBHENYEELADOgcIABCwAxBDOg0IABDkAhDWBBCwAxgBOg8ILhDUAhDIAxCwAxBDGAI6DAguEMgDELADEEMYAkoECEEYAEoECEYYAVCDEVirGWCtImgCcAF4AIABngGIAcIJkgEDMC44mAEAoAEByAERwAEB2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz",
    },
    {
      titulo: "Frankenstein",
      imagen:
        "https://global-uploads.webflow.com/6034d7d1f3e0f52c50b2adee/6034d7d1f3e0f525c6b2b272_frankenstein-mary-shelley-editorial-alma.jpg",
      enlace:
        "https://www.google.com/search?q=frankenstein+libro&sxsrf=ALiCzsb5YRGzzR5v6bnoomusq2vGWBGEjg%3A1664743998014&ei=Pvo5Y-o5zcrWxA_Kgr2ADg&oq=franke+libro&gs_lcp=Cgdnd3Mtd2l6EAMYADIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHSgQIQRgASgQIRhgAUABYzwZg3QxoAHABeACAAacBiAGPB5IBAzAuNpgBAKABAcABAQ&sclient=gws-wiz",
    },
    {
      titulo: "Rebeca",
      imagen:
        "https://imagessl0.casadellibro.com/a/l/t5/60/9788497938860.jpg",
      enlace:
        "https://www.google.com/search?q=rebeca+libro&sxsrf=ALiCzsbMxXHpDKneXG4PPTFXM_LJUveAkg%3A1664744050299&ei=cvo5Y_rqEeWj1sQPxbuJ2A8&gs_ssp=eJzj4tTP1Tcwya1KKjRg9OIpSk1KTU5UyMlMKsoHAGL1CB4&oq=rebeca++libro&gs_lcp=Cgdnd3Mtd2l6EAEYBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyCAgAEB4QBxAKMgYIABAeEAcyBQguEIAEMgUIABCABDIFCAAQgAQ6BAguEA06BAgAEA06CAgAEB4QDRAKOgYIABAeEA06CggAEB4QCBAHEAo6CAgAEB4QCBAHOggIABAeEAgQDUoECEEYAEoECEYYAFAAWKR5YLqTAWgEcAF4AIABlgKIAeMOkgEFMC45LjKYAQCgAQHAAQE&sclient=gws-wiz",
    },
    {
      titulo: "Jane Eyre",
      imagen:
        "https://www.alianzaeditorial.es/imagenes/libros/grande/9788491048961-jane-eyre.jpg",
      enlace:
        "https://www.google.com/search?q=jane+eyre+libro&sxsrf=ALiCzsbCU2HeLgcCW2cOdd345XM1NECzDQ%3A1664744103632&ei=p_o5Y938Jefc1sQPpIOhyA0&oq=jane+e+libro&gs_lcp=Cgdnd3Mtd2l6EAMYADIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHSgQIQRgASgQIRhgAUABYgAVg1Q5oAHABeAKAAacDiAH6CpIBCTAuNC4wLjEuMZgBAKABAcABAQ&sclient=gws-wiz",
    },
    {
      titulo: "Anna Karenina",
      imagen:
        "https://libreriaslectura.com/wp-content/uploads/2020/12/9788415618881.jpg",
      enlace:
        "https://www.google.com/search?q=anna+karenina+libro&sxsrf=ALiCzsZ8RLHDaW5kvMmE2qJIxkeKkmaW6Q%3A1664744149819&ei=1fo5Y7vGMdyv5OUPmIa6mAg&oq=anna+libro&gs_lcp=Cgdnd3Mtd2l6EAMYADIGCAAQHhAHMggIABAeEAcQCjIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAdKBAhBGABKBAhGGABQAFj9A2DBDGgAcAF4AIABmQGIAdsEkgEDMC40mAEAoAEBwAEB&sclient=gws-wiz",
    },
    {
      titulo: "Persuasion",
      imagen:
        "https://global-uploads.webflow.com/6034d7d1f3e0f52c50b2adee/62545315b0e15eb09d81c505_6034d7d1f3e0f50a0fb2b2ce_Persuasion-jane-austen-editorial-alma.jpeg",
      enlace:
        "https://www.google.com/search?q=persuasion+libro&sxsrf=ALiCzsbRY-ghV0cg6-9NHro9wVKEFUFXpQ%3A1664744207204&ei=D_s5Y46LDJSk5OUPl6K14Ak&oq=persu+libro&gs_lcp=Cgdnd3Mtd2l6EAMYADIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHSgQIQRgASgQIRhgAUABYrAVgyg5oAHABeACAAbkBiAGEBpIBAzAuNZgBAKABAcABAQ&sclient=gws-wiz",
    },
    {
      titulo: "Agnes Grey",
      imagen:
        "https://www.albaeditorial.es/wp-content/uploads/2020/10/9788488730190-agnes-grey-alba-editorial.jpg",
      enlace:
        "https://www.google.com/search?q=agnes+grey+libro&sxsrf=ALiCzsYJIpICMt_W9IjWwYPk_f1CcVZN1w%3A1664744247080&ei=N_s5Y6vABNiA5OUP4bGOyAU&oq=agneslibro&gs_lcp=Cgdnd3Mtd2l6EAEYATIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHOggIABAeEAcQCkoECEEYAEoECEYYAFAAWIwIYIoRaABwAXgAgAG7AYgBkQaSAQMwLjWYAQCgAQHAAQE&sclient=gws-wiz",
    },
    {
      titulo: "Antonio y Cleopatra",
      imagen:
        "https://images-na.ssl-images-amazon.com/images/I/41oIENdqldL._BO1,204,203,200_.jpg",
      enlace:
        "https://www.google.com/search?q=antonio+y+cleopatra+william+shakespeare&sxsrf=ALiCzsYNIdZa9Ky2oHTJBSEEaMj3BJcPkg%3A1664744314236&ei=evs5Y4uJDoKL0AbR84OgCQ&gs_ssp=eJzj4tDP1TfISDJPMWD0Uk_MK8nPy8xXqFRIzknNL0gsKUpUKM_MyclMzFUozkjMTi0uSE0sSgUAuzUSPA&oq=antonio+y+cleopatra+will&gs_lcp=Cgdnd3Mtd2l6EAMYADIFCC4QgAQyBggAEB4QFjoKCAAQRxDWBBCwAzoHCAAQsAMQQzoNCAAQ5AIQ1gQQsAMYAToPCC4Q1AIQyAMQsAMQQxgCOgwILhDIAxCwAxBDGAI6BAguEEM6BAgAEEM6BQgAEIAEOgUIABDLAUoECEEYAEoECEYYAVBtWKcNYM0faAFwAXgAgAGfAYgB_gWSAQMwLjWYAQCgAQHIARDAAQHaAQYIARABGAnaAQYIAhABGAg&sclient=gws-wiz",
    },
    {
      titulo: "Llamame por tu nombre",
      imagen:
        "https://libreriaslectura.com/wp-content/uploads/2021/08/9788420473895.jpg",
      enlace:
        "https://www.google.com/search?q=llamame+por+tu+nombre+libro&sxsrf=ALiCzsbPZPT54Y5kmpzc6qUVZeJVp402-A%3A1664744320108&ei=gPs5Y4ilBsy45OUPwdGF-AE&ved=0ahUKEwiI5d3ut8L6AhVMHLkGHcFoAR8Q4dUDCA4&uact=5&oq=llamame+por+tu+nombre+libro&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMggIABCABBDJAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgYIIxAnEBM6BAgjECc6BAguEEM6BwguENQCEEM6CwguEIAEELEDEIMBOgsIABCABBCxAxCDAToECAAQQzoKCC4QxwEQ0QMQQzoLCC4QgAQQsQMQ1AI6BQguEIAEOggIABCABBCxAzoICC4QgAQQsQM6CgguELEDENQCEEM6CAguEIAEENQCOgoIABCABBCHAhAUOg0IABCABBCHAhDJAxAUSgQIQRgASgQIRhgAUABYtzVg5jdoAnABeACAAfIBiAHfD5IBBjAuMTIuMZgBAKABAcABAQ&sclient=gws-wiz",
    },
    {
      titulo: "Encuentrame",
      imagen:
        "https://libreriaslectura.com/wp-content/uploads/2021/08/978842439402.jpg",
      enlace:
        "https://www.google.com/search?q=encuentrame+libro&sxsrf=ALiCzsatbrx9ai8pqNd1_UMev4d9Meho3w%3A1664744361473&ei=qfs5Y83CHLWV5OUPjKQL&oq=encuentra+libro&gs_lcp=Cgdnd3Mtd2l6EAMYATIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHSgQIQRgASgQIRhgAUABYnSVgujtoAnABeAGAAYADiAG6D5IBBzAuOS4xLjGYAQCgAQHAAQE&sclient=gws-wiz",
    },
    {
      titulo: "Juana: La reina loca de amor",
      imagen: "https://m.media-amazon.com/images/I/51LoEKd0CbL.jpg",
      enlace:
        "https://www.google.com/search?gs_ssp=eJzj4tFP1zc0Ssq1MKgyKjdg9JLOKk3MS1TISVQoSs0EMfKTExVSUhUSc_OLAB7nDdE&q=juana+la+reina+loca+de+amor&oq=juana+la+reina+loc&gs_lcrp=EgZjaHJvbWUqDAgCEC4YJxiABBiKBTIGCAAQRRg5MgYIARBFGEAyDAgCEC4YJxiABBiKBTIHCAMQABiABDIICAQQABgWGB4yCAgFEAAYFhgeMggIBhAAGBYYHjIICAcQABgWGB7SAQg4NTgwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8",
    },
    {
      titulo: "Maria Antonieta. Diario secreto de una reina",
      imagen:
        "https://cdn.edelvives.es/docs/catalogo/9849/imgs/original/109731_antonietadiario_EDV.jpg",
      enlace:
        "https://www.google.com/search?q=maria+antonieta+benjamin+lacombe&sca_esv=594634983&bih=953&biw=1920&hl=es-419&sxsrf=AM9HkKk_revl5Yyn5nzrufWf9PuhX4yvMg%3A1703967053062&ei=TXmQZa26A7vM5OUPrLedgAs&gs_ssp=eJzj4tVP1zc0TC6KNynOyrEwYPRSyE0sykxUSMwryc_LTC1JVEhKzctKzM3MU8hJTM7PTUoFAJDXEQc&oq=maria+antonieta+benjamin+lacom&gs_lp=Egxnd3Mtd2l6LXNlcnAiHm1hcmlhIGFudG9uaWV0YSBiZW5qYW1pbiBsYWNvbSoCCAAyBRAuGIAEMgYQABgWGB5Iqm5Qpy9YnmNwAXgBkAEBmAGmA6ABuB6qAQgwLjI5LjQtMbgBA8gBAPgBAcICChAAGEcY1gQYsAPCAg0QABiABBiKBRhDGLADwgIOEAAY5AIY1gQYsAPYAQHCAhMQLhhDGIAEGIoFGMgDGLAD2AECwgITEC4YgAQYigUYQxjIAxiwA9gBAsICChAuGIAEGIoFGCfCAgoQIxiABBiKBRgnwgIKEC4YgAQYigUYQ8ICChAAGIAEGIoFGEPCAhYQLhiABBiKBRhDGLEDGIMBGMcBGNEDwgIOEAAYgAQYigUYsQMYgwHCAhcQLhiABBiKBRiXBRjcBBjeBBjfBNgBA8ICDRAAGIAEGIoFGEMYsQPCAgsQABiABBixAxiDAcICBRAAGIAEwgIEECMYJ8ICEBAAGIAEGIoFGEMYsQMYgwHCAg0QLhiABBiKBRhDGNQCwgINEC4YgAQYigUYQxixA8ICCBAuGIAEGLEDwgIKEC4YgAQYFBiHAsICGRAuGIAEGIoFGEMYlwUY3AQY3gQY3wTYAQPCAggQLhixAxiABMICChAAGIAEGBQYhwLCAhcQLhixAxiABBiXBRjcBBjeBBjfBNgBA8ICChAAGIAEGMsBGArCAgcQABiABBgKwgIOEC4YgAQYywEYxwEYrwHCAggQABiABBjLAcICCBAAGBYYHhgK4gMEGAAgQYgGAZAGE7oGBggBEAEYCboGBggCEAEYCLoGBggDEAEYFA&sclient=gws-wiz-serp",
    },
    {
      titulo: "El retrato de Dorian Gray",
      imagen:
        "https://global-uploads.webflow.com/6034d7d1f3e0f52c50b2adee/625453f57ec46f382a4c5587_6034d7d1f3e0f57e9ab2b23f_El-retrato-de-dorian-gray-oscar-wilde-editorial-alma.jpeg",
      enlace:
        "https://www.google.com/search?q=el+retrato+de+dorian+gray&client=opera&hs=ouV&sca_esv=595179528&ei=Xn6UZZnTBa735OUP6NG5iAc&gs_ssp=eJzj4tDP1TcwL6gqN2D0kkzNUShKLSlKLMlXSElVSMkvykzMU0gvSqwEAN9XDIU&oq=el+re&gs_lp=Egxnd3Mtd2l6LXNlcnAiBWVsIHJlKgIIADINEC4YgAQYigUYQxjUAjINEC4YgAQYigUYQxjUAjIKEAAYgAQYigUYQzIKEC4YgAQYigUYQzIQEC4YgAQYigUYQxixAxiDATINEC4YgAQYigUYQxjUAjIKEAAYgAQYigUYQzIKEC4YgAQYigUYQzIKEC4YgAQYigUYQzIQEC4YgAQYigUYQxixAxjUAjIcEC4YgAQYigUYQxjUAhiXBRjcBBjeBBjgBNgBAUjrDVAAWM4EcAB4AZABAJgBhgGgAfQEqgEDMC41uAEDyAEA-AEBwgILEAAYgAQYsQMYgwHCAgUQABiABMICERAuGIAEGLEDGIMBGMcBGNEDwgIIEAAYgAQYsQPCAg4QLhiABBiKBRixAxiDAcICDhAAGIAEGIoFGLEDGIMBwgIQEAAYgAQYigUYQxixAxiDAcICBRAuGIAEwgIIEC4YgAQY1ALCAgsQLhiABBixAxiDAeIDBBgAIEGIBgG6BgYIARABGBQ&sclient=gws-wiz-serp",
    },
    {
      titulo: "La gula del picaflor",
      imagen: "https://pictures.abebooks.com/isbn/9789990522877-es.jpg",
      enlace:
        "https://www.google.com/search?q=la+gula+del+picaflor&client=opera&sca_esv=595179528&ei=XYOUZePGHKTW1sQP6429gA4&gs_ssp=eJzj4tFP1zc0SsrNyTY0iTdg9BLJSVRILwUSKak5CgWZyYlpOflFAMYwC5M&oq=la+gula+del&gs_lp=Egxnd3Mtd2l6LXNlcnAiC2xhIGd1bGEgZGVsKgIIADIFEC4YgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyFBAuGIAEGJcFGNwEGN4EGOAE2AEBSIUZUABYggxwAHgBkAEAmAGWAqAB7gyqAQUwLjkuMrgBA8gBAPgBAcICChAAGIAEGIoFGEPCAgoQLhiABBiKBRhDwgINEC4YgAQYigUYQxjUAsICGRAuGIAEGIoFGEMYlwUY3AQY3gQY4ATYAQHCAhAQLhiABBiKBRhDGLEDGIMBwgIcEC4YgAQYigUYQxjUAhiXBRjcBBjeBBjgBNgBAeIDBBgAIEGIBgG6BgYIARABGBQ&sclient=gws-wiz-serp",
    },
    {
      titulo: "La edad de la inocencia",
      imagen:
        "https://www.rbalibros.com/medio/2022/05/21/la-edad-de-la-inocencia_e2502657_500x751.jpg",
      enlace:
        "https://www.google.com/search?q=la+edad+de+la+inocencia+libro&client=opera&sca_esv=595179528&ei=R4SUZfTzOPbV1sQPgNyP8AE&gs_ssp=eJzj4tTP1TcwyqkyNzZg9JLNSVRITUlMUUhJVQAyM_Pyk1PzkjMTFXIyk4ryAQl7DXs&oq=la+edad+de+l&gs_lp=Egxnd3Mtd2l6LXNlcnAiDGxhIGVkYWQgZGUgbCoCCAAyBRAuGIAEMgUQLhiABDIFEAAYgAQyBRAAGIAEMgUQLhiABDIFEAAYgAQyBRAAGIAEMgUQLhiABDIFEAAYgAQyBRAAGIAEMhQQLhiABBiXBRjcBBjeBBjgBNgBAUj5KlAAWLYgcAR4AJABAJgBjQGgAaAOqgEEMS4xNbgBA8gBAPgBAcICChAuGIAEGIoFGEPCAgoQABiABBiKBRhDwgIZEC4YgAQYigUYQxiXBRjcBBjeBBjgBNgBAcICBBAAGAPCAg4QLhiABBixAxiDARjUAsICCBAuGIAEGNQCwgIGEAAYFhge4gMEGAAgQYgGAboGBggBEAEYFA&sclient=gws-wiz-serp",
    },
    {
      titulo: "Madame Bovary",
      imagen:
        "https://images.cdn3.buscalibre.com/fit-in/360x360/4f/01/4f01c9b6690120cc56df546d25ef6f09.jpg",
      enlace:
        "https://www.google.com/search?q=madame+bovary&client=opera&sca_esv=595190714&bih=958&biw=900&hl=es-419&source=hp&ei=94SUZcCaEJPc1sQP3vm0uAM&iflsig=AO6bgOgAAAAAZZSTB-d2LWKyHaQZAgGc22fBqJcCBg5b&gs_ssp=eJzj4tTP1TcwNE2qqjBg9OLNTUxJzE1VSMovSyyqBABnIghp&oq=madame+&gs_lp=Egdnd3Mtd2l6IgdtYWRhbWUgKgIIADIKEC4YQxiABBiKBTIKEAAYgAQYigUYQzIKEAAYgAQYigUYQzIKEC4YgAQYigUYQzIKEC4YgAQYigUYQzILEC4Y1AIYsQMYgAQyBRAAGIAEMgUQLhiABDIFEAAYgAQyBRAAGIAESLcYUJQFWJULcAF4AJABAJgBvAGgAfIGqgEDMC43uAEDyAEA-AEBqAIKwgIQEC4YgAQYigUYQxjqAhi0AsICHRAAGIAEGIoFGOUCGOUCGOoCGLQCGIoDGLcDGNQDwgIdEC4YgAQYigUY5QIY5QIY6gIYtAIYigMYtwMY1APCAhoQABiABBiKBRjlAhjlAhjqAhi0AhiKAxi3A8ICDRAuGIAEGIoFGEMY1ALCAhAQABiABBiKBRhDGLEDGIMBwgIWEC4YgAQYigUYQxixAxiDARjHARjRA8ICCxAAGIAEGLEDGIMBwgIIEAAYgAQYsQPCAg4QABiABBiKBRixAxiDAcICEBAuGIAEGIoFGEMYsQMYgwHCAg0QLhiABBiKBRhDGLEDwgILEC4YgAQYsQMYgwHCAgsQLhiDARixAxiABMICCBAuGLEDGIAEwgIIEC4YgAQYsQPCAgsQLhiABBixAxjUAg&sclient=gws-wiz",
    },
    {
      titulo: "El diario secreto de Ana Bolena",
      imagen:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51tj774NfxL._AC_UF1000,1000_QL80_.jpg",
      enlace:
        "https://www.google.com/search?q=el+diario+de+ana+bolena&source=lmns&bih=958&biw=900&client=opera&hl=es-419&sa=X&ved=2ahUKEwiZvZT-17-DAxUtpJUCHWO7BKUQ0pQJKAB6BAgBEAI",
    },
    {
      titulo: "María Antonieta",
      imagen:
        "https://www.esferalibros.com/wp-content/uploads/2021/04/principal-maria-antonieta-es-681x1024.jpg",
      enlace:
        "https://www.google.com/search?q=maria+antonieta+catalina+de+hasburgo&client=opera&sca_esv=595190714&bih=958&biw=900&hl=es-419&ei=W4WUZc7JLezM1sQPg7aOqAQ&ved=0ahUKEwiO44z_17-DAxVsppUCHQObA0UQ4dUDCBA&uact=5&oq=maria+antonieta+catalina+de+hasburgo&gs_lp=Egxnd3Mtd2l6LXNlcnAiJG1hcmlhIGFudG9uaWV0YSBjYXRhbGluYSBkZSBoYXNidXJnbzIHECEYoAEYCjIHECEYoAEYCkiJzgJQAFjVywJwD3gBkAEAmAG2AaABsC-qAQQxLjUwuAEDyAEA-AEBwgIQEAAYgAQYigUYQxixAxiDAcICChAuGIAEGIoFGEPCAgoQABiABBiKBRhDwgIWEC4YgAQYigUYQxixAxiDARjHARjRA8ICCxAuGIAEGLEDGIMBwgILEAAYgAQYsQMYgwHCAgUQABiABMICChAuGEMYgAQYigXCAg0QLhiABBiKBRhDGNQCwgITEAAYgAQYigUYQxixAxiDARjJA8ICCxAAGIAEGIoFGJIDwgINEC4YgAQYigUYQxixA8ICEBAuGIAEGIoFGEMYsQMYgwHCAggQLhiABBixA8ICGRAuGIAEGIoFGEMYlwUY3AQY3gQY4ATYAQHCAgcQLhiABBgKwgIFEC4YgATCAg0QLhiABBixAxjUAhgKwgIHEAAYgAQYCsICGRAuGIAEGIoFGEMYlwUY3AQY3gQY3wTYAQHCAg0QABiABBixAxiDARgKwgINEC4YgAQYxwEYrwEYCsICDRAAGIAEGIoFGEMYsQPCAgsQLhiABBjHARivAcICHBAuGIAEGIoFGEMYsQMYlwUY3AQY3gQY3wTYAQHCAg0QLhhDGLEDGIAEGIoFwgIcEC4YQxixAxiABBiKBRiXBRjcBBjeBBjfBNgBAcICFBAuGIAEGJcFGNwEGN4EGOAE2AEBwgIIEC4YgAQY1ALCAgoQABiABBhGGPsBwgIWEAAYgAQYRhj7ARiXBRiMBRjdBNgBAsICBhAAGBYYHsICFBAuGIAEGJcFGNwEGN4EGN8E2AEBwgIFECEYoAHCAggQABiABBiiBMICBBAhGBXCAgUQIRifBeIDBBgAIEGIBgG6BgYIARABGBS6BgYIAhABGBM&sclient=gws-wiz-serp",
    },
    //{titulo: "", imagen: "", enlace: ""},
  ];

  const librosFav = [
    {
      titulo: "Harry Potter y el prisionero de azkaban",
      imagen:
        "https://tercerafundacion.net/imagenes/portada/P-00067943.jpg",
      enlace:
        "https://www.google.com/search?q=harry+potter+y+el+prisionero+de+azkaban+libro&sxsrf=ALiCzsbHTnSiLBQjkq3k-_lQLvo_JNlkmw%3A1664743719806&ei=J_k5Y-rwMLTu1sQP6OK3gA0&ved=0ahUKEwiqoL7QtcL6AhU0t5UCHWjxDdAQ4dUDCA4&uact=5&oq=harry+potter+y+el+prisionero+de+azkaban+libro&gs_lcp=Cgdnd3Mtd2l6EAMyBQguEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMggIABCABBDJAzIFCAAQgAQyBQgAEIAEOgoIABBHENYEELADOgcIABCwAxBDOg0IABDkAhDWBBCwAxgBOg8ILhDUAhDIAxCwAxBDGAI6DAguEMgDELADEEMYAjoICC4QgAQQ1AI6CgguEIAEEIcCEBRKBAhBGABKBAhGGAFQsARYvxtghh9oAXABeACAAZ8BiAHuDJIBBDAuMTGYAQCgAQHIARDAAQHaAQYIARABGAnaAQYIAhABGAg&sclient=gws-wiz",
    },
    {
      titulo: "Rebeca",
      imagen:
        "https://imagessl0.casadellibro.com/a/l/t5/60/9788497938860.jpg",
      enlace:
        "https://www.google.com/search?q=rebeca+libro&sxsrf=ALiCzsbMxXHpDKneXG4PPTFXM_LJUveAkg%3A1664744050299&ei=cvo5Y_rqEeWj1sQPxbuJ2A8&gs_ssp=eJzj4tTP1Tcwya1KKjRg9OIpSk1KTU5UyMlMKsoHAGL1CB4&oq=rebeca++libro&gs_lcp=Cgdnd3Mtd2l6EAEYBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyCAgAEB4QBxAKMgYIABAeEAcyBQguEIAEMgUIABCABDIFCAAQgAQ6BAguEA06BAgAEA06CAgAEB4QDRAKOgYIABAeEA06CggAEB4QCBAHEAo6CAgAEB4QCBAHOggIABAeEAgQDUoECEEYAEoECEYYAFAAWKR5YLqTAWgEcAF4AIABlgKIAeMOkgEFMC45LjKYAQCgAQHAAQE&sclient=gws-wiz",
    },
    {
      titulo: "Jane Eyre",
      imagen:
        "https://www.alianzaeditorial.es/imagenes/libros/grande/9788491048961-jane-eyre.jpg",
      enlace:
        "https://www.google.com/search?q=jane+eyre+libro&sxsrf=ALiCzsbCU2HeLgcCW2cOdd345XM1NECzDQ%3A1664744103632&ei=p_o5Y938Jefc1sQPpIOhyA0&oq=jane+e+libro&gs_lcp=Cgdnd3Mtd2l6EAMYADIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHSgQIQRgASgQIRhgAUABYgAVg1Q5oAHABeAKAAacDiAH6CpIBCTAuNC4wLjEuMZgBAKABAcABAQ&sclient=gws-wiz",
    },
    {
      titulo: "Agnes Grey",
      imagen:
        "https://www.albaeditorial.es/wp-content/uploads/2020/10/9788488730190-agnes-grey-alba-editorial.jpg",
      enlace:
        "https://www.google.com/search?q=agnes+grey+libro&sxsrf=ALiCzsYJIpICMt_W9IjWwYPk_f1CcVZN1w%3A1664744247080&ei=N_s5Y6vABNiA5OUP4bGOyAU&oq=agneslibro&gs_lcp=Cgdnd3Mtd2l6EAEYATIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHOggIABAeEAcQCkoECEEYAEoECEYYAFAAWIwIYIoRaABwAXgAgAG7AYgBkQaSAQMwLjWYAQCgAQHAAQE&sclient=gws-wiz",
    },
    {
      titulo: "Llamame por tu nombre",
      imagen:
        "https://libreriaslectura.com/wp-content/uploads/2021/08/9788420473895.jpg",
      enlace:
        "https://www.google.com/search?q=llamame+por+tu+nombre+libro&sxsrf=ALiCzsbPZPT54Y5kmpzc6qUVZeJVp402-A%3A1664744320108&ei=gPs5Y4ilBsy45OUPwdGF-AE&ved=0ahUKEwiI5d3ut8L6AhVMHLkGHcFoAR8Q4dUDCA4&uact=5&oq=llamame+por+tu+nombre+libro&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMggIABCABBDJAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgYIIxAnEBM6BAgjECc6BAguEEM6BwguENQCEEM6CwguEIAEELEDEIMBOgsIABCABBCxAxCDAToECAAQQzoKCC4QxwEQ0QMQQzoLCC4QgAQQsQMQ1AI6BQguEIAEOggIABCABBCxAzoICC4QgAQQsQM6CgguELEDENQCEEM6CAguEIAEENQCOgoIABCABBCHAhAUOg0IABCABBCHAhDJAxAUSgQIQRgASgQIRhgAUABYtzVg5jdoAnABeACAAfIBiAHfD5IBBjAuMTIuMZgBAKABAcABAQ&sclient=gws-wiz",
    },
    {
      titulo: "Encuentrame",
      imagen:
        "https://libreriaslectura.com/wp-content/uploads/2021/08/978842439402.jpg",
      enlace:
        "https://www.google.com/search?q=encuentrame+libro&sxsrf=ALiCzsatbrx9ai8pqNd1_UMev4d9Meho3w%3A1664744361473&ei=qfs5Y83CHLWV5OUPjKQL&oq=encuentra+libro&gs_lcp=Cgdnd3Mtd2l6EAMYATIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHMgYIABAeEAcyBggAEB4QBzIGCAAQHhAHSgQIQRgASgQIRhgAUABYnSVgujtoAnABeAGAAYADiAG6D5IBBzAuOS4xLjGYAQCgAQHAAQE&sclient=gws-wiz",
    },
    {
      titulo: "Juana: La reina loca de amor",
      imagen: "https://m.media-amazon.com/images/I/51LoEKd0CbL.jpg",
      enlace:
        "https://www.google.com/search?gs_ssp=eJzj4tFP1zc0Ssq1MKgyKjdg9JLOKk3MS1TISVQoSs0EMfKTExVSUhUSc_OLAB7nDdE&q=juana+la+reina+loca+de+amor&oq=juana+la+reina+loc&gs_lcrp=EgZjaHJvbWUqDAgCEC4YJxiABBiKBTIGCAAQRRg5MgYIARBFGEAyDAgCEC4YJxiABBiKBTIHCAMQABiABDIICAQQABgWGB4yCAgFEAAYFhgeMggIBhAAGBYYHjIICAcQABgWGB7SAQg4NTgwajBqN6gCALACAA&sourceid=chrome&ie=UTF-8",
    },
    {
      titulo: "El retrato de Dorian Gray",
      imagen:
        "https://global-uploads.webflow.com/6034d7d1f3e0f52c50b2adee/625453f57ec46f382a4c5587_6034d7d1f3e0f57e9ab2b23f_El-retrato-de-dorian-gray-oscar-wilde-editorial-alma.jpeg",
      enlace:
        "https://www.google.com/search?q=el+retrato+de+dorian+gray&client=opera&hs=ouV&sca_esv=595179528&ei=Xn6UZZnTBa735OUP6NG5iAc&gs_ssp=eJzj4tDP1TcwL6gqN2D0kkzNUShKLSlKLMlXSElVSMkvykzMU0gvSqwEAN9XDIU&oq=el+re&gs_lp=Egxnd3Mtd2l6LXNlcnAiBWVsIHJlKgIIADINEC4YgAQYigUYQxjUAjINEC4YgAQYigUYQxjUAjIKEAAYgAQYigUYQzIKEC4YgAQYigUYQzIQEC4YgAQYigUYQxixAxiDATINEC4YgAQYigUYQxjUAjIKEAAYgAQYigUYQzIKEC4YgAQYigUYQzIKEC4YgAQYigUYQzIQEC4YgAQYigUYQxixAxjUAjIcEC4YgAQYigUYQxjUAhiXBRjcBBjeBBjgBNgBAUjrDVAAWM4EcAB4AZABAJgBhgGgAfQEqgEDMC41uAEDyAEA-AEBwgILEAAYgAQYsQMYgwHCAgUQABiABMICERAuGIAEGLEDGIMBGMcBGNEDwgIIEAAYgAQYsQPCAg4QLhiABBiKBRixAxiDAcICDhAAGIAEGIoFGLEDGIMBwgIQEAAYgAQYigUYQxixAxiDAcICBRAuGIAEwgIIEC4YgAQY1ALCAgsQLhiABBixAxiDAeIDBBgAIEGIBgG6BgYIARABGBQ&sclient=gws-wiz-serp",
    },
    {
      titulo: "La gula del picaflor",
      imagen: "https://pictures.abebooks.com/isbn/9789990522877-es.jpg",
      enlace:
        "https://www.google.com/search?q=la+gula+del+picaflor&client=opera&sca_esv=595179528&ei=XYOUZePGHKTW1sQP6429gA4&gs_ssp=eJzj4tFP1zc0SsrNyTY0iTdg9BLJSVRILwUSKak5CgWZyYlpOflFAMYwC5M&oq=la+gula+del&gs_lp=Egxnd3Mtd2l6LXNlcnAiC2xhIGd1bGEgZGVsKgIIADIFEC4YgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyFBAuGIAEGJcFGNwEGN4EGOAE2AEBSIUZUABYggxwAHgBkAEAmAGWAqAB7gyqAQUwLjkuMrgBA8gBAPgBAcICChAAGIAEGIoFGEPCAgoQLhiABBiKBRhDwgINEC4YgAQYigUYQxjUAsICGRAuGIAEGIoFGEMYlwUY3AQY3gQY4ATYAQHCAhAQLhiABBiKBRhDGLEDGIMBwgIcEC4YgAQYigUYQxjUAhiXBRjcBBjeBBjgBNgBAeIDBBgAIEGIBgG6BgYIARABGBQ&sclient=gws-wiz-serp",
    },
    {
      titulo: "El diario secreto de Ana Bolena",
      imagen:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/51tj774NfxL._AC_UF1000,1000_QL80_.jpg",
      enlace:
        "https://www.google.com/search?q=el+diario+de+ana+bolena&source=lmns&bih=958&biw=900&client=opera&hl=es-419&sa=X&ved=2ahUKEwiZvZT-17-DAxUtpJUCHWO7BKUQ0pQJKAB6BAgBEAI",
    },
  ];

  const peliculas = [
    {
        titulo: "Lady Bird",
        imagen: "https://m.media-amazon.com/images/M/MV5BODhkZGE0NDQtZDc0Zi00YmQ4LWJiNmUtYTY1OGM1ODRmNGVkXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        enlace: "https://www.google.com/search?q=ladybird&sxsrf=ALiCzsYfKn33S5tQguu0izF1k-B38rNFpg%3A1664744979060&ei=E_45Y4KvA4SI0AbO07ygCQ&gs_ssp=eJzj4tVP1zc0TDYsNDHPMDA2YPTiyElMqUzKLEoBAFbwB0g&oq=lady&gs_lcp=Cgdnd3Mtd2l6EAMYATIECCMQJzIECC4QQzIHCC4Q1AIQQzIECC4QQzIHCC4Q1AIQQzIECAAQQzIHCC4QsQMQQzIECC4QQzIHCC4QsQMQQzILCC4QgAQQsQMQgwE6BggjECcQEzoLCAAQgAQQsQMQgwE6DgguEIAEELEDEIMBENQCOggILhCxAxCDAUoECEEYAEoECEYYAFAAWL8JYMUYaABwAXgAgAHsAogB2gaSAQcwLjMuMC4xmAEAoAEBwAEB&sclient=gws-wiz"
    },
    {titulo: "Llámame por tu nombre", imagen: "https://m.media-amazon.com/images/M/MV5BNDk3NTEwNjc0MV5BMl5BanBnXkFtZTgwNzYxNTMwMzI@._V1_FMjpg_UX1000_.jpg", enlace: "https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TKoySDZOSq8wYPQSSU7MyVHITVVIqlSozC8tUshLzE0FANVHC-o&client=opera&q=call+me+by+your+name&sourceid=opera&ie=UTF-8&oe=UTF-8"},
    {titulo: "Mujercitas", imagen: "https://m.media-amazon.com/images/M/MV5BY2QzYTQyYzItMzAwYi00YjZlLThjNTUtNzMyMDdkYzJiNWM4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", enlace: "https://www.google.com/search?q=little+women&client=opera&hs=Icr&sca_esv=595190714&bih=916&biw=898&hl=es-419&ei=6Y2UZe27Gc321sQP4aqliAU&gs_ssp=eJzj4tVP1zc0TEsxS0nPSS8zYPTiycksKclJVSjPz03NAwCICQmu&oq=l&gs_lp=Egxnd3Mtd2l6LXNlcnAiAWwqAggAMg0QLhiABBiKBRhDGNQCMgoQLhiABBiKBRhDMgoQLhiABBiKBRhDMgoQLhiABBiKBRhDMg0QLhiABBiKBRhDGNQCMgoQLhiABBiKBRhDMgsQABiABBixAxiDATINEC4YgAQYigUYQxjUAjIREC4YgAQYigUYsQMYgwEY1AIyCxAAGIAEGIoFGLEDMhwQLhiABBiKBRhDGNQCGJcFGNwEGN4EGOAE2AEBSNULUABYAHAAeAGQAQCYAX2gAX2qAQMwLjG4AQPIAQD4AQHiAwQYACBBiAYBugYGCAEQARgU&sclient=gws-wiz-serp"},
    {titulo: "Ella", imagen: "https://pics.filmaffinity.com/Her-716403893-large.jpg", enlace: "https://www.google.com/search?client=opera&q=her&sourceid=opera&ie=UTF-8&oe=UTF-8"},
    {titulo: "Emma", imagen: "https://upload.wikimedia.org/wikipedia/en/5/53/Emma_poster.jpeg", enlace: "https://www.google.com/search?gs_ssp=eJzj4tVP1zc0zDAzyMhLrio0YPTiSs3NTVTIzS_LTAUAcK8Ilg&client=opera&q=emma+movie&sourceid=opera&ie=UTF-8&oe=UTF-8"},
    {titulo: "Midsommar", imagen: "https://pics.filmaffinity.com/Midsommar-578791309-large.jpg", enlace: "https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TMs2KaxKTok3YPTizM1MKc7PzU0sAgBtNgii&client=opera&q=midsommar&sourceid=opera&ie=UTF-8&oe=UTF-8"},
    {titulo: "Parásitos", imagen: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg", enlace: "https://www.google.com/search?client=opera&q=parasite&sourceid=opera&ie=UTF-8&oe=UTF-8"},
    {titulo: "Klaus", imagen: "https://m.media-amazon.com/images/M/MV5BMWYwOThjM2ItZGYxNy00NTQwLWFlZWEtM2MzM2Q5MmY3NDU5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", enlace: "https://www.google.com/search?client=opera&q=klaus&sourceid=opera&ie=UTF-8&oe=UTF-8"},
    {titulo: "Hereditary", imagen: "https://m.media-amazon.com/images/I/91U6sekg9yL._AC_SY679_.jpg", enlace: "https://www.google.com/search?q=hereditary&sxsrf=ALiCzsZO2TNwHqErlwfN3PS5T_b_6qZg_w%3A1664745203453&ei=8_45Y7OkG4LW1sQPoJ-D6As&gs_ssp=eJzj4tVP1zc0TDOuKEzPMzA3YPTiykgtSk3JLEksqgQAcF8Isw&oq=here&gs_lcp=Cgdnd3Mtd2l6EAMYADIKCC4QsQMQgwEQQzIICAAQgAQQsQMyCAgAEIAEELEDMgUIABCABDIFCAAQgAQyCwguEIAEELEDEIMBMggILhCxAxCDATIFCAAQgAQyBQgAEIAEMgUIABCABDoECCMQJzoECC4QQzoHCC4Q1AIQQzoECAAQQ0oECEEYAEoECEYYAFAAWN0DYIwMaABwAXgAgAHlAYgB1wWSAQUwLjMuMZgBAKABAcABAQ&sclient=gws-wiz"},
    {titulo: "The Shining", imagen: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg", enlace: "https://www.google.com/search?q=the+shining&sxsrf=ALiCzsaKPl5pKLyy5jreSuv-5wFps9eJXg%3A1664745288326&ei=SP85Y8y3E6HL1sQP7vS24AY&gs_ssp=eJzj4tTP1TcwScuqKjNg9OIuyUhVKM7IzMvMSwcAW1EH2g&oq=the+shi&gs_lcp=Cgdnd3Mtd2l6EAMYADIHCC4Q1AIQQzILCAAQgAQQsQMQgwEyCAguEIAEENQCMgUILhCABDIFCC4QgAQyBQgAEIAEMgUILhCABDIFCC4QgAQyBQguEIAEMgUILhCABDoKCAAQRxDWBBCwAzoNCAAQ5AIQ1gQQsAMYAToMCC4QyAMQsAMQQxgCOgcIIxCxAhAnOgoILhCxAxCDARAKOgQIABBDOgQIABAKOgcIIxCwAhAnOgoILhCxAxCDARANOgQIABANOgYILhANEBM6BggAEA0QEzoICAAQHhANEBM6CggAEB4QDxANEBM6CggAEB4QDRAFEBM6DAgAEB4QDxAIEA0QEzoKCAAQHhAIEA0QEzoHCC4Q6gIQJzoHCCMQ6gIQJzoECCMQJzoGCCMQJxATOgQILhBDOgQILhAnSgQIQRgASgQIRhgBULePAVijuQFg-cYBaAZwAXgEgAGxAYgBhBSSAQQwLjE2mAEAoAEBsAEKyAEPwAEB2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz"},
    {titulo: "Scarface", imagen: "https://m.media-amazon.com/images/M/MV5BNjdjNGQ4NDEtNTEwYS00MTgxLTliYzQtYzE2ZDRiZjFhZmNlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg", enlace: "https://www.google.com/search?q=scarface&sxsrf=ALiCzsblWzmHDvF87yzuejWeVx_bBrLkxw%3A1664745498711&ei=GgA6Y8fxKvn21sQPxo-u2As&gs_ssp=eJzj4tTP1TcwzMvJMzZg9OIoTk4sSktMTgUAQjkGdg&oq=sca&gs_lcp=Cgdnd3Mtd2l6EAMYATIECAAQQzINCC4QsQMQgwEQ1AIQQzIECC4QQzIKCC4QsQMQgwEQQzIKCC4QsQMQgwEQQzIHCC4QsQMQQzIICAAQgAQQsQMyCwguEIAEELEDEIMBMgsIABCABBCxAxCDATIFCAAQgAQ6BAgjECc6BAguECc6BggjECcQEzoHCC4Q1AIQQzoKCAAQsQMQgwEQQzoHCC4Q6gIQJzoHCCMQ6gIQJ0oECEEYAEoECEYYAFAAWNowYLs_aAJwAXgAgAG-AYgBpgaSAQMwLjWYAQCgAQGwAQrAAQE&sclient=gws-wiz"},
    {titulo: "El padrino II", imagen: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg", enlace: "https://www.google.com/search?q=the+godfather+2&sxsrf=ALiCzsaFFvZmnJY2M_aSY3CJg1_x6bPo-g%3A1664745581858&ei=bQA6Y8rxM7L21sQP04K60Ao&gs_ssp=eJzj4tDP1TfIKk4zM2D04i_JSFVIz09JSwQyihSMAHIOCHg&oq=the+godfa&gs_lcp=Cgdnd3Mtd2l6EAMYAjIHCC4Q1AIQQzIECC4QQzIECC4QQzIHCC4Q1AIQQzIECAAQQzIECC4QQzIFCAAQgAQyBQgAEMsBMgUIABDLATIFCAAQywE6BAgjECc6BAguECc6BggjECcQEzoKCC4QsQMQgwEQQzoFCC4QgAQ6CwguEIAEELEDEIMBOggILhCABBDUAjoICC4QsQMQgwFKBAhBGABKBAhGGABQAFjXHWCFKmgBcAF4AIABtwGIAcwMkgEEMC4xMJgBAKABAcABAQ&sclient=gws-wiz"},
    {titulo: "The king of comedy", imagen: "https://m.media-amazon.com/images/M/MV5BMTViNjlkYjgtMmE3Zi00ZGVkLTkyMjMtNzc3YzAwNzNiODQ1XkEyXkFqcGdeQXVyMjA0MzYwMDY@._V1_.jpg", enlace: "https://www.google.com/search?q=the+king+of+comedy&sxsrf=ALiCzsaP2xaqxp24omt2_IXixhtjbuh1jw%3A1664745691368&ei=2wA6Y9X8FdPx1sQPgvK7qAc&gs_ssp=eJzj4tTP1TcwSispSTFg9BIqyUhVyM7MS1fIT1NIzs9NTakEAJeWCiA&oq=the+king+of&gs_lcp=Cgdnd3Mtd2l6EAMYADIECC4QQzIECC4QQzIICC4QgAQQ1AIyBQgAEIAEMggILhCABBDUAjIFCC4QgAQyBQgAEIAEMgUILhCABDIFCAAQgAQyBQgAEIAEOgQIIxAnOgQILhAnOgcILhDUAhBDOgQIABBDOgUIABDLAToFCC4QywE6CwguEMcBEK8BEMsBOggILhDUAhDLAToHCC4QChDLAToECAAQCjoHCC4Q1AIQCjoECC4QDToECAAQDToHCC4Q1AIQDUoECEEYAEoECEYYAFAAWOY5YJ9AaABwAXgAgAG1AYgBuA-SAQQwLjEymAEAoAEBwAEB"},
    {titulo: "Goodfellas", imagen: "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg", enlace: "https://www.google.com/search?q=goodfellas&sxsrf=ALiCzsakCGfjwo2gRE_j6jjBjIZe_cZf1w%3A1664745792698&ei=QAE6Y4OdKqLV1sQP3I-70A4&gs_ssp=eJzj4tDP1TfIMCsyNWD04krPz09JS83JSSwGAEhSBvg&oq=goodf&gs_lcp=Cgdnd3Mtd2l6EAMYADIKCC4QsQMQgwEQQzIFCAAQgAQyBQgAEIAEMgcILhCABBAKMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyCwguEMcBENEDEMsBOgQIIxAnOgQILhBDOgcILhDUAhBDOgoIABCxAxCDARBDOgcIABCxAxBDOhAILhCxAxCDARDHARDRAxBDOgQIABBDOggIABCxAxCDAToICAAQgAQQsQM6CAguEIAEELEDSgQIQRgASgQIRhgAUABY6ARgtA5oAHABeACAAbgBiAHEBpIBAzAuNZgBAKABAcABAQ&sclient=gws-wiz"},
    ]

    const series = [
        {titulo: "The Crown", imagen: "https://pics.filmaffinity.com/The_Crown_Serie_de_TV-375362409-large.jpg", enlace: "https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TCopL8lLMi42YPTiLMlIVUguyi_PAwBudAiE&q=the+crown&oq=the+cr&aqs=chrome.1.69i57j46i67i131i433j46i131i433i512l2j46i67j69i60l3.3246j0j7&sourceid=chrome&ie=UTF-8"},
        {titulo: "Outlander", imagen: "https://pics.filmaffinity.com/Outlander_Serie_de_TV-447717145-large.jpg", enlace: "https://www.google.com/search?q=outlander&sxsrf=ALiCzsYkq2z4c_Y05iCnHmQOQ90Gr2-SOw%3A1664746266197&ei=GgM6Y6vSC9LB5OUP9s27-Ac&gs_ssp=eJzj4tLP1TcoT8q1zE4yYPTizC8tyUnMS0ktAgBWqAeu&oq=outl&gs_lcp=Cgdnd3Mtd2l6EAMYADINCC4QsQMQgwEQ1AIQQzIECAAQQzIECAAQQzIHCAAQsQMQQzIECAAQQzIECAAQQzILCC4QgAQQsQMQgwEyCAgAEIAEELEDMgsIABCABBCxAxCDATIICAAQsQMQgwE6BAgjECc6BAguEEM6BwguENQCEEM6CgguELEDEIMBEEM6BQgAEIAESgQIQRgASgQIRhgAUABY9QRgiw5oAHABeACAAaIBiAHkBJIBAzAuNJgBAKABAcABAQ&sclient=gws-wiz"},
        {titulo: "Black Mirror", imagen: "https://es.web.img3.acsta.net/pictures/18/05/22/15/58/5745341.jpg", enlace: "https://www.google.com/search?q=black+mirror&source=lmns&bih=969&biw=1920&hl=es-419&sa=X&ved=2ahUKEwiQktqdwcL6AhUVOLkGHaqfC5oQ_AUoAHoECAEQAA"}
    ]

    const canciones = [
        {titulo: "Ride", imagen: "https://i.scdn.co/image/ab67616d0000b273cb76604d9c5963544cf5be64", enlace: "https://open.spotify.com/track/7yFMhCJOsH7khgpdnyrZAZ?si=ae7e064ed7794911"},
        {titulo: "National Anthem", imagen: "https://i.scdn.co/image/ab67616d0000b273cb76604d9c5963544cf5be64", enlace: "https://open.spotify.com/track/7cNz65PfCatRXoX7QtqM2A?si=958d1dfa172e4575"},
        {titulo: "Born To Die", imagen: "https://i.scdn.co/image/ab67616d0000b273cb76604d9c5963544cf5be64", enlace: "https://open.spotify.com/track/4Ouhoi2lAhrLJKFzUqEzwl?si=172bcf389b894e46"},
        {titulo: "Video Games", imagen: "https://i.scdn.co/image/ab67616d0000b273cb76604d9c5963544cf5be64", enlace: "https://open.spotify.com/track/0fBSs3fRoh1yJcne77fdu9?si=e980560693ad4992"},
        {titulo: "Radio", imagen: "https://i.scdn.co/image/ab67616d0000b273cb76604d9c5963544cf5be64", enlace: "https://open.spotify.com/track/3taCbWWTilb7eNMsAzOBq4?si=9926d3f666d04116"},
        {titulo: "Cinnamon Girl", imagen: "https://upload.wikimedia.org/wikipedia/en/8/8a/Lana_Del_Rey_-_Norman_Fucking_Rockwell.png", enlace: "https://open.spotify.com/track/2mdEsXPu8ZmkHRRtAdC09e?si=51b35a60fc6b4328"},
        {titulo: "Brooklyn Baby", imagen: "https://cdns-images.dzcdn.net/images/cover/b68adb6788dfa09a314f594aec287850/500x500.jpg", enlace: "https://open.spotify.com/track/1NZs6n6hl8UuMaX0UC0YTz?si=06b5044f17144461"},
        {titulo: "Dark Paradise", imagen: "https://i.scdn.co/image/ab67616d0000b273cb76604d9c5963544cf5be64", enlace: "https://open.spotify.com/track/6qqdFWe7C4LsBjWbXQdsHA?si=01948e51a413416b"},
        {titulo: "Diet Montain Dew", imagen: "https://i.scdn.co/image/ab67616d0000b273cb76604d9c5963544cf5be64", enlace: "https://open.spotify.com/track/2vtmY2mSccRzKGjtcHSzI3?si=0ff6778d4eab4c7d"},
    ]

    const cantantes = [
        {titulo: "Lana Del Rey", imagen: "https://yt3.googleusercontent.com/o5_mjwl7QSyLQBguYioDM3wB4POD7tFbCOmBJn5SdpwZ5QvmrzoDG_lM_hgRma6qVKPHwqUJ2q8=s900-c-k-c0x00ffffff-no-rj", enlace: "https://open.spotify.com/artist/00FQb4jTyendYWaN8pK0wa?si=03FjqwmEQ5GgIXkXNh3mRA"},
        {titulo: "Mac DeMarco", imagen: "https://media.npr.org/assets/img/2015/07/31/ct-228-mac-ep-cover_1400_custom-b44a6e01fecc8ef306901df4abd325ec0f0afdaa-s1100-c50.jpg", enlace: "https://open.spotify.com/artist/3Sz7ZnJQBIHsXLUSo0OQtM?si=iQN5nx27R8e2eE_w9rGHeg"},
        {titulo: "The Neighbourhood", imagen: "https://cdns-images.dzcdn.net/images/artist/b9baaa2d9485a510cb868a8de6a7adc6/500x500.jpg", enlace: "https://open.spotify.com/artist/77SW9BnxLY8rJ0RciFqkHh?si=ZuIFOH6TSx2knQZRnMC1fA"},
        {titulo: "Sufjan Stevens", imagen: "https://www.music-news.com/images/news/bang/164689.jpg", enlace: "https://open.spotify.com/artist/4MXUO7sVCaFgFjoTI5ox5c?si=AAcss-rUTDi4BUL1O7Nxew"},
        {titulo: "Lana Del Rey", imagen: "https://yt3.googleusercontent.com/o5_mjwl7QSyLQBguYioDM3wB4POD7tFbCOmBJn5SdpwZ5QvmrzoDG_lM_hgRma6qVKPHwqUJ2q8=s900-c-k-c0x00ffffff-no-rj", enlace: "https://open.spotify.com/artist/00FQb4jTyendYWaN8pK0wa?si=03FjqwmEQ5GgIXkXNh3mRA"}
    ]
  function crearContenido(containerId, data) {
    const container = document.getElementById(containerId);
    container.innerHTML = data
      .map(
        (elemento) => `
            <div class="elemento">
                <a href="${elemento.enlace}" target="_blank">
                    <img src="${elemento.imagen}" id="imagenElemento">
                </a>
                <span>${elemento.titulo}</span>
            </div>
        `
      )
      .join("");
  }
  crearContenido("librosh", libros);
  crearContenido("librosFavoritos", librosFav);
  crearContenido("peliculash", peliculas)
  crearContenido("seriesh", series)
  crearContenido("cancionesh", canciones)
  crearContenido("cantantesh", cantantes)
  function openNavLibro() {
    document.getElementById("libros").style.width = "1000px";
    document.getElementById("main").style.marginLeft = "0px";
  }

  function closeNavLibros() {
    document.getElementById("libros").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  function openNavPelicula() {
    document.getElementById("peliculas").style.width = "1000px";
    document.getElementById("main").style.marginLeft = "0px";
  }

  function closeNavPeliculas() {
    document.getElementById("peliculas").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  function openNavMusica() {
    document.getElementById("musica").style.width = "1000px";
    document.getElementById("main").style.marginLeft = "0px";
  }

  function closeNavMusica() {
    document.getElementById("musica").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
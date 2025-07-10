// studio/schemaTypes/contactMessage.ts

import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactMessage',
  title: 'İletişim Mesajları',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Ad Soyad',
      type: 'string',
      readOnly: true, // Panelden düzenlenemesin
    }),
    defineField({
      name: 'phone',
      title: 'Telefon',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'email',
      title: 'E-posta',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'message',
      title: 'Mesaj',
      type: 'text',
      readOnly: true,
    }),
    defineField({
      name: 'createdAt',
      title: 'Gönderilme Tarihi',
      type: 'datetime',
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      createdAt: 'createdAt',
    },
    prepare(selection) {
      const {title, subtitle, createdAt} = selection
      return {
        title: title,
        subtitle: `${subtitle} - ${new Date(createdAt).toLocaleDateString('tr-TR', { day: '2-digit', month: 'long', year: 'numeric' })}`,
      }
    },
  },
})
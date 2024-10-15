'use server';

import { formSchema } from '@/lib/zod.schemas';
import { z } from 'zod';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
    const { error } = await resend.emails.send({
      from: `thmslfb - Portfolio <${process.env.RESEND_FORM_EMAIL}>`,
      to: ['contact@thomaslefebvre.fr'],
      subject: `New Message from ${emailFormData.name}`,
      react: EmailTemplate({
        name: emailFormData.name,
        email: emailFormData.email,
        message: emailFormData.message,
      }),
    });

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Error sending email', error);

    throw error;
  }
};

import { useTransition, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem } from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { cn } from '@/lib/utils';
import { formSchema } from '@/lib/zod.schemas';
import { send } from '@/actions/email.actions';
import { Loader2, CheckCircle2 } from 'lucide-react';

export const ContactForm = () => {
  const [isPending, startTransition] = useTransition();
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    mode: 'onTouched',
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      try {
        await send(values);
        form.reset();
        setIsSuccess(true);
      } catch (error) {
        console.error('Failed to send email:', error);
      }
    });
  }

  const formContent = (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <div className='flex items-center gap-4'>
          <FormField
            control={form.control}
            name='name'
            render={({ field, fieldState }) => (
              <FormItem className='flex-1'>
                <FormControl>
                  <Input
                    placeholder='Name'
                    {...field}
                    className={cn(
                      fieldState.error
                        ? 'border border-red-500'
                        : 'border-none',
                      'bg-[#272727]'
                    )}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field, fieldState }) => (
              <FormItem className='flex-1'>
                <FormControl>
                  <Input
                    placeholder='Email'
                    {...field}
                    className={cn(
                      fieldState.error
                        ? 'border border-red-500'
                        : 'border-none',
                      'bg-[#272727]'
                    )}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name='message'
          render={({ field, fieldState }) => (
            <FormItem className=''>
              <FormControl>
                <Textarea
                  placeholder='Message'
                  {...field}
                  className={cn(
                    fieldState.error ? 'border border-red-500' : 'border-none',
                    'bg-[#272727] h-48'
                  )}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type='submit' variant='secondary' className='w-full'>
          Send
        </Button>
      </form>
    </Form>
  );

  return (
    <div className='relative'>
      {formContent}
      {(isPending || isSuccess) && (
        <div
          className={cn(
            'absolute inset-0 -my-[2px] flex items-center justify-center rounded-md',
            isPending ? 'bg-[#FFFFFF]' : 'bg-[#1E1E1E]'
          )}>
          {isPending && (
            <Loader2 className='h-16 w-16 animate-spin text-[#1E1E1E]' />
          )}
          {isSuccess && <CheckCircle2 className='h-16 w-16 text-[#FFFFFF]' />}
        </div>
      )}
    </div>
  );
};

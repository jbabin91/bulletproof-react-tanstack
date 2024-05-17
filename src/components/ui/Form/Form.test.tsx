import { zodResolver } from '@hookform/resolvers/zod';
import {
  type FieldValues,
  FormProvider,
  type SubmitHandler,
  useForm,
  type UseFormProps,
  type UseFormReturn,
} from 'react-hook-form';
import { z, type ZodType } from 'zod';

import { rtlRender, screen, userEvent, waitFor } from '@/tests/test-utils';
import { cn } from '@/utils/cn';

import { Button } from '../Button';
import { Input } from '../Input';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './Form';

const testData = {
  title: 'Hello World',
};

const schema = z.object({
  title: z.string().min(1, 'Required'),
});

type FormProps<TFormValues extends FieldValues, Schema> = {
  onSubmit: SubmitHandler<TFormValues>;
  schema: Schema;
  className?: string;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  id?: string;
};

function MyForm<
  Schema extends ZodType<any, any, any>,
  TFormValues extends FieldValues = z.infer<Schema>,
>({
  onSubmit,
  children,
  className,
  options,
  id,
  schema,
}: FormProps<TFormValues, Schema>) {
  const form = useForm({ ...options, resolver: zodResolver(schema) });
  return (
    <FormProvider {...form}>
      <form
        className={cn('space-y-6', className)}
        id={id}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {children(form)}
      </form>
    </FormProvider>
  );
}

test('should render and submit a basic Form component', async () => {
  const handleSubmit = vi.fn() as SubmitHandler<z.infer<typeof schema>>;

  rtlRender(
    <MyForm id="my-form" schema={schema} onSubmit={handleSubmit}>
      {(form) => (
        <>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter a title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" name="submit" type="submit">
            Submit
          </Button>
        </>
      )}
    </MyForm>,
  );

  await userEvent.type(screen.getByLabelText(/title/i), testData.title);

  await userEvent.click(screen.getByRole('button', { name: /submit/i }));

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith(testData, expect.anything()),
  );
});

test('should fail submission if validation fails', async () => {
  const handleSubmit = vi.fn() as SubmitHandler<z.infer<typeof schema>>;

  rtlRender(
    <MyForm id="my-form" schema={schema} onSubmit={handleSubmit}>
      {(form) => (
        <>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter a title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" name="submit" type="submit">
            Submit
          </Button>
        </>
      )}
    </MyForm>,
  );

  await userEvent.click(await screen.findByRole('button', { name: /submit/i }));

  await screen.findByRole('alert', { name: /required/i });

  expect(handleSubmit).toHaveBeenCalledTimes(0);
});

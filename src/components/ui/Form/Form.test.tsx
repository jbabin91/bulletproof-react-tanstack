import { type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

import { rtlRender, screen, userEvent, waitFor } from '@/tests/test-utils';

import { Button } from '../Button';
import { Input } from '../Input';
import {
  Form,
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

test('should render and submit a basic Form component', async () => {
  const handleSubmit = vi.fn() as SubmitHandler<z.infer<typeof schema>>;

  rtlRender(
    <Form id="my-form" schema={schema} onSubmit={handleSubmit}>
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
    </Form>,
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
    <Form id="my-form" schema={schema} onSubmit={handleSubmit}>
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
    </Form>,
  );

  await userEvent.click(await screen.findByRole('button', { name: /submit/i }));

  await screen.findByRole('alert', { name: /required/i });

  expect(handleSubmit).toHaveBeenCalledTimes(0);
});

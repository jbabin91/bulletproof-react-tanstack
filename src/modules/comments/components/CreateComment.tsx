import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { type z } from 'zod';

import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Textarea,
} from '@/components/ui';
import { Authorization, Roles } from '@/modules/auth';

import {
  createCommentInputSchema,
  useCreateComment,
} from '../api/create-comment';

export function CreateComment({ discussionId }: { discussionId: string }) {
  const createComment = useCreateComment({
    discussionId,
    mutationConfig: {
      onSuccess: () => {
        toast.success('Comment Created');
      },
    },
  });

  const form = useForm<z.infer<typeof createCommentInputSchema>>({
    defaultValues: {
      body: '',
      discussionId,
    },
    resolver: zodResolver(createCommentInputSchema),
  });

  function onSubmit(values: z.infer<typeof createCommentInputSchema>) {
    createComment.mutate({ data: values });
  }

  return (
    <Authorization allowedRoles={[Roles.Admin]}>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Create Comment</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <Form {...form}>
            <form
              className="flex flex-col gap-5"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <DialogHeader>
                <DialogTitle>Create Comment</DialogTitle>
              </DialogHeader>
              <div className="">
                <FormField
                  control={form.control}
                  name="body"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sr-only">Body</FormLabel>
                      <FormControl>
                        <Textarea className="resize-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="submit">Submit</Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </Authorization>
  );
}

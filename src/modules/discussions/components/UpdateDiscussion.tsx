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
  Input,
  Textarea,
} from '@/components/ui';
import { Authorization, Roles } from '@/modules/auth';

import { useDiscussion } from '../api/get-discussion';
import {
  updateDiscussionInputSchema,
  useUpdateDiscussion,
} from '../api/update-discussion';

export function UpdateDiscussion({ discussionId }: { discussionId: string }) {
  const discussion = useDiscussion({ discussionId });
  const updateDiscussion = useUpdateDiscussion({
    mutationConfig: {
      onSuccess: () => {
        toast.success('Discussion Updated');
      },
    },
  });

  const form = useForm<z.infer<typeof updateDiscussionInputSchema>>({
    defaultValues: {
      body: discussion.data?.body ?? '',
      title: discussion.data?.title ?? '',
    },
    resolver: zodResolver(updateDiscussionInputSchema),
  });

  function onSubmit(values: z.infer<typeof updateDiscussionInputSchema>) {
    updateDiscussion.mutate({ data: values, discussionId });
  }

  return (
    <Authorization allowedRoles={[Roles.Admin]}>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Update Discussion</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <DialogHeader>
                <DialogTitle>Update Discussion</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="body"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Body</FormLabel>
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

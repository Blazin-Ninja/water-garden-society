import { useState } from 'react'
import type { FormEvent } from 'react'
import './JoinForm.css'

type Status = 'idle' | 'submitting' | 'success' | 'error' | 'unconfigured'

export function JoinForm() {
  const formId = import.meta.env.VITE_FORMSPREE_ID as string | undefined
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!formId) {
      setStatus('unconfigured')
      return
    }

    const form = e.currentTarget
    const data = new FormData(form)
    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) {
        throw new Error('Something went wrong. Please try again or email us.')
      }
      form.reset()
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err instanceof Error ? err.message : 'Unable to send your message.',
      )
    }
  }

  return (
    <form className="join-form" onSubmit={onSubmit} noValidate={false}>
      <div className="join-form__field">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required autoComplete="name" />
      </div>
      <div className="join-form__field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>
      <div className="join-form__field">
        <label htmlFor="phone">
          Phone <span className="join-form__optional">(optional)</span>
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="join-form__field">
        <label htmlFor="message">
          Tell us about your pond interest{' '}
          <span className="join-form__optional">(optional)</span>
        </label>
        <textarea id="message" name="message" rows={5} />
      </div>
      <button type="submit" className="btn btn--primary" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send interest'}
      </button>

      {status === 'success' ? (
        <p className="join-form__status join-form__status--ok" role="status">
          Thanks—we’ll be in touch. You’re always welcome at our next meeting.
        </p>
      ) : null}
      {status === 'error' ? (
        <p className="join-form__status join-form__status--err" role="alert">
          {errorMessage}
        </p>
      ) : null}
      {status === 'unconfigured' ? (
        <p className="join-form__status join-form__status--err" role="alert">
          The join form is not connected yet. Set{' '}
          <code>VITE_FORMSPREE_ID</code> in a local <code>.env</code> file (see{' '}
          <code>.env.example</code>), then restart the site.
        </p>
      ) : null}
    </form>
  )
}

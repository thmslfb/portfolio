interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <html lang='en'>
    <head>
      <link rel='preload' as='image' href='https://github.com/thmslfb.png' />
      <meta charSet='UTF-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='x-apple-disable-message-reformatting' />
      <title>{`New Message from ${name}`}</title>
    </head>

    <body
      style={{
        backgroundColor: '#ffffff',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
      }}>
      <table
        align='center'
        width='100%'
        border={0}
        cellPadding='0'
        cellSpacing='0'
        role='presentation'
        style={{
          maxWidth: '100%',
          margin: '0 auto',
          padding: '20px 0 48px',
          width: '580px',
        }}>
        <tbody>
          <tr style={{ width: '100%' }}>
            <td>
              <table
                align='center'
                width='100%'
                border={0}
                cellPadding='0'
                cellSpacing='0'
                role='presentation'>
                <tbody>
                  <tr>
                    <td>
                      <img
                        alt='@thmslfb'
                        height='96'
                        src='https://github.com/thmslfb.png'
                        style={{
                          display: 'block',
                          outline: 'none',
                          border: 'none',
                          textDecoration: 'none',
                          margin: '0 auto',
                          marginBottom: '16px',
                          borderRadius: '50%',
                        }}
                        width='96'
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                align='center'
                width='100%'
                border={0}
                cellPadding='0'
                cellSpacing='0'
                role='presentation'
                style={{ paddingBottom: '20px' }}>
                <tbody>
                  <tr>
                    <td>
                      <table
                        align='center'
                        width='100%'
                        border={0}
                        cellPadding='0'
                        cellSpacing='0'
                        role='presentation'>
                        <tbody style={{ width: '100%' }}>
                          <tr style={{ width: '100%' }}>
                            <td>
                              <p
                                style={{
                                  fontSize: '32px',
                                  lineHeight: '1.3',
                                  margin: '16px 0',
                                  fontWeight: 700,
                                  color: '#484848',
                                }}>
                                Here&apos;s what {name} wrote
                              </p>
                              <p
                                style={{
                                  fontSize: '18px',
                                  lineHeight: '1.4',
                                  margin: '16px 0',
                                  color: '#484848',
                                  padding: '24px',
                                  backgroundColor: '#f2f3f3',
                                  borderRadius: '4px',
                                }}>
                                “{message}”
                              </p>
                              <div style={{ marginTop: '30px' }}>
                                <a
                                  href={`mailto:${email}`}
                                  style={{
                                    lineHeight: '100%',
                                    textDecoration: 'none',
                                    display: 'block',
                                    maxWidth: '100%',
                                    backgroundColor: '#272727',
                                    borderRadius: '3px',
                                    color: '#fff',
                                    fontSize: '18px',
                                    padding: '19px 0',
                                    textAlign: 'center',
                                  }}
                                  target='_blank'>
                                  <span
                                    style={{
                                      maxWidth: '100%',
                                      display: 'inline-block',
                                      fontSize: '18px',
                                      color: '#fff',
                                    }}>
                                    Send an email
                                  </span>
                                </a>
                              </div>

                              <div style={{ margin: '50px 0 20px 0' }}>
                                <hr
                                  style={{
                                    width: '100%',
                                    border: 'none',
                                    borderTop: '1px solid #eaeaea',
                                    borderColor: '#cccccc',
                                  }}
                                />
                              </div>
                              <p
                                style={{
                                  fontSize: '14px',
                                  lineHeight: '24px',
                                  margin: '16px 0',
                                  color: '#B0B3B0',
                                  marginBottom: '10px',
                                }}>
                                {name}&apos;s email: {email}
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </body>
  </html>
);

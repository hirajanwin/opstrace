# Opstrace Roadmap

<!-- markdownlint-disable MD036 -->

Our early access version provides a foundation that solves many [real pain points](https://opstrace.com/blog/public-launch-announcement) that people have today.
But we know there is still a lot more to do to have a _complete_ observability platform that is more than just private, secure and cost-effective.
This high-level roadmap highlights major guideposts along our path toward that goal.

**Opstrace Collaborative UI**

* Today's observability tools are disjoint from the day-to-day development process.
For example, dashboards can break easily with a deploy and sharing analyses is hard (screenshots anyone?).
By integrating your data with code we can solve these existing problems and create new capabilities (think VScode meets Python notebooks).
Stay tuned to our blog and/or sign up for our [newsletter](https://opstrace.com/#newsletter).

**First-class Alerts**

* Similarly, alerts shouldn't be a disjoint concept.
Often alerts are left until the end, and usualy wired up through a separate system.
When you write code you _assert_ certain code paths work—alerts should be the same.

**CloudWatch and Stackdriver Collection**

* Some metrics and logs for lower-level cloud infrastructure can only be found in the provider's native APIs.
For example, in the case of AWS, metrics for S3, SQS, and load balancers are stored in CloudWatch.
Collecting these centrally can be done by setting up the [CloudWatch](https://github.com/prometheus/cloudwatch_exporter) or [Stackdriver](https://github.com/prometheus-community/stackdriver_exporter) Prometheus exporters, but this requires operational expertise.

**Synthetic Monitoring**

* Reliably receive alerts if some part of your product is not available in some part of the world.

**Total cost of ownership detailed in the UI**

* Opstrace will show how much it costs to store metrics and logs inside of the product.
No more spreadsheets and guessing but instead actionable information that is automatically kept up to date.

**Tracing**

* Tracing suffers similar problems to logs and metrics–it's expensive to operate and even more difficult to set up.
Not to mention the wide-ranging privacy concerns with sending _any of_ your data out to a 3rd party provider.
And if you're using existing open source tools to run it in your own account, it's even harder to do, with more ongoing maintenance burden.
Despite all this, we will provide distributed tracing as a deliberate feature, making it just as easy, secure, and private as logs and metrics.

We welcome you to join our [community discussions](https://go.opstrace.com/community) and ask us questions, make proposals, and/or just chat about what we're doing.

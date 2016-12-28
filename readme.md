# Polymer Observable Properties
Using custom models with Polymer properties is challenging. Polymer requires that `this.notifyPath` be
called for external changes to deep model properties in order for it to recognize the update. This project
adds support for an `ObservableModel` type as a Polymer property.

The model has an `observable` property which allows Polymer to subscribe to update notifications. The model
emits property updates which Polymer uses automatically call notifyPath.
